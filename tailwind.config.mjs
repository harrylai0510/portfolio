/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#1A1A1A',
        surface: '#212121',
        elevated: '#2D2D2D',
        accent: '#FF6B35',
        'accent-glow': 'rgba(255, 107, 53, 0.31)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0,0,0,0.21)',
        'header': '0 2px 12px rgba(0,0,0,0.15)',
        'cta-glow': '0 4px 20px rgba(255, 107, 53, 0.31)',
        'footer-inner': 'inset 0 1px 8px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
