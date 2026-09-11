import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#243432',
        sage: '#536c63',
        mist: '#edf2ed',
        sand: '#f5efe6',
        blush: '#d9b8ad',
        clay: '#a96555',
        cream: '#fbfaf6'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(36,52,50,.10)'
      }
    }
  },
  plugins: []
};

export default config;