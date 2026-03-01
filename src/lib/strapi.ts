import type { EducationEntry } from '../data/education';
import type { Job } from '../data/work';

const STRAPI_URL = import.meta.env.STRAPI_URL ?? '';
const STRAPI_API_KEY = import.meta.env.STRAPI_API_KEY ?? '';

const strapiHeaders = (): HeadersInit => ({
  Authorization: `Bearer ${STRAPI_API_KEY}`,
  'Content-Type': 'application/json',
});

/** Strapi rich text block (list, paragraph, list-item, text, etc.) */
type StrapiBlock = {
  type?: string;
  format?: string;
  text?: string;
  children?: StrapiBlock[];
  [key: string]: unknown;
};

function richTextToPlainText(blocks: StrapiBlock[] | string | null | undefined): string {
  if (blocks == null) return '';
  if (typeof blocks === 'string') return blocks;
  if (!Array.isArray(blocks)) return '';

  function walk(node: StrapiBlock): string[] {
    if (node.type === 'text' && node.text) return [node.text];
    const parts: string[] = [];
    if (node.type === 'list-item' && node.children?.length) {
      const inner = node.children.flatMap(walk).join('').trim();
      if (inner) parts.push(inner);
      return parts;
    }
    if (node.children) return node.children.flatMap(walk);
    return parts;
  }

  return blocks.flatMap(walk).filter(Boolean).join('\n');
}

/** Strapi education document (flat shape: program_name, school_name, start_date, end_date) */
interface StrapiEducationDoc {
  id: number;
  program_name?: string;
  school_name?: string;
  start_date?: string;
  end_date?: string;
  description?: string | null;
  [key: string]: unknown;
}

function mapStrapiToEntry(doc: StrapiEducationDoc): EducationEntry {
  const start = doc.start_date ?? '';
  const end = doc.end_date ?? '';
  const dates = start && end ? `${start} — ${end}` : start || end;
  return {
    degree: doc.program_name ?? '',
    school: doc.school_name ?? '',
    dates,
    description: doc.description ?? '',
  };
}

/**
 * Fetches education entries from Strapi. Returns [] if env not set or request fails.
 * Collection name is assumed to be "education" → endpoint /api/educations (Strapi pluralizes).
 */
export async function fetchEducationFromStrapi(): Promise<EducationEntry[]> {
  if (!STRAPI_URL || !STRAPI_API_KEY) {
    console.error('[Strapi] fetchEducationFromStrapi: STRAPI_URL or STRAPI_API_KEY not set');
    return [];
  }

  const url = `${STRAPI_URL.replace(/\/$/, '')}/api/educations`;
  try {
    const res = await fetch(url, { headers: strapiHeaders() });
    if (!res.ok) {
      const body = await res.text();
      console.error(`[Strapi] fetchEducationFromStrapi failed: ${res.status} ${res.statusText}`, body.slice(0, 500));
      return [];
    }
    const json = (await res.json()) as { data?: StrapiEducationDoc[] };
    const list = Array.isArray(json.data) ? json.data : [];
    return list.map(mapStrapiToEntry);
  } catch (err) {
    console.error('[Strapi] fetchEducationFromStrapi error:', err);
    return [];
  }
}

/** Strapi work document (flat: role/job_title, company/company_name, start_date, end_date; description = rich text blocks) */
interface StrapiWorkDoc {
  id: number;
  role?: string;
  job_title?: string;
  company?: string;
  company_name?: string;
  dates?: string;
  start_date?: string;
  end_date?: string;
  description?: StrapiBlock[] | string | null;
  [key: string]: unknown;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** Format Strapi date (YYYY, YYYY-MM, or YYYY-MM-DD) as "June 2021" */
function formatMonthYear(dateStr: string): string {
  if (!dateStr.trim()) return '';
  const s = dateStr.trim();
  const yearMatch = s.match(/^(\d{4})/);
  const year = yearMatch ? yearMatch[1]! : '';
  const monthMatch = s.match(/^\d{4}-(\d{2})/);
  const month1 = monthMatch ? parseInt(monthMatch[1]!, 10) : null;
  const month = month1 != null && month1 >= 1 && month1 <= 12 ? MONTHS[month1 - 1]! : '';
  return month ? `${month} ${year}` : year;
}

function mapStrapiToJob(doc: StrapiWorkDoc): Job {
  const startRaw = doc.start_date ?? '';
  const endRaw = doc.end_date ?? '';
  const start = formatMonthYear(startRaw);
  const end = formatMonthYear(endRaw);
  const dates = doc.dates ?? (start && end ? `${start} — ${end}` : start ? `${start} — present` : end ?? '');
  return {
    role: doc.role ?? doc.job_title ?? '',
    company: doc.company ?? doc.company_name ?? '',
    dates,
    description: richTextToPlainText(doc.description),
  };
}

export async function fetchWorkFromStrapi(): Promise<Job[]> {
  if (!STRAPI_URL || !STRAPI_API_KEY) {
    console.error('[Strapi] fetchWorkFromStrapi: STRAPI_URL or STRAPI_API_KEY not set');
    return [];
  }

  const url = `${STRAPI_URL.replace(/\/$/, '')}/api/works?sort=start_date:desc`;
  try {
    const res = await fetch(url, { headers: strapiHeaders() });
    if (!res.ok) {
      const body = await res.text();
      console.error(`[Strapi] fetchWorkFromStrapi failed: ${res.status} ${res.statusText}`, body.slice(0, 500));
      return [];
    }
    const json = (await res.json()) as { data?: StrapiWorkDoc[] };
    const list = Array.isArray(json.data) ? json.data : [];
    return list.map(mapStrapiToJob);
  } catch (err) {
    console.error('[Strapi] fetchWorkFromStrapi error:', err);
    return [];
  }
}
