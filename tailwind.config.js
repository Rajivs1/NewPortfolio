/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffb400',
        // Dark theme colors
        'dark-bg': '#111111',
        'dark-surface': '#1e1e1e',
        'dark-secondary': '#2b2b2b',
        'dark-border': '#383838',
        'dark-text': '#a6a6a6',
        dark: '#1e1e1e',
        // Light theme colors - improved
        'light-bg': '#f5f7fa',
        'light-surface': '#ffffff',
        'light-secondary': '#f8f9fa',
        'light-border': '#e9ecef',
        'light-text': '#6c757d',
        light: '#ffffff',
      },
      boxShadow: {
        'custom': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'custom-light': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
} 