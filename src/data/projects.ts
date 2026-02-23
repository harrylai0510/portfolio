export interface Project {
  name: string;
  dates: string;
  tech: string;
  description: string;
  /** Optional image URL for card thumbnail (e.g. /images/project.jpg or Unsplash) */
  image?: string;
}

export const projects: Project[] = [
  {
    name: 'distributed_cache',
    dates: '2022 — present',
    tech: 'Go · Redis · gRPC',
    description:
      'Side project: high-throughput cache layer with cluster support. Open-sourced.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    name: 'cli_toolkit',
    dates: '2020 — 2021',
    tech: 'Rust · Python',
    description:
      'Internal dev tools for local env setup and migrations. Used by 20+ engineers.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
  },
];
