/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0F172A',
          surface: '#1E293B',
          accent: '#3B82F6',
          text: {
            primary: '#F1F5F9',
            secondary: '#94A3B8'
          }
        }
      }
    },
  },
  plugins: [],
}