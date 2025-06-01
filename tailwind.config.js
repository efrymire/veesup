/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Violet light theme colors
        'v-light': {
          primary: '#8b5cf6',    // Violet-500
          secondary: '#a78bfa',  // Violet-400
          background: '#f5f3ff', // Violet-50
          text: '#1e1b4b',       // Violet-950
          accent: '#c4b5fd',     // Violet-300
        },
        // Violet dark theme colors
        'v-dark': {
          primary: '#a78bfa',    // Violet-400
          secondary: '#c4b5fd',  // Violet-300
          background: '#2e1065', // Violet-900
          text: '#ede9fe',       // Violet-100
          accent: '#8b5cf6',     // Violet-500
        },
        // Blue light theme colors
        'b-light': {
          primary: '#3b82f6',    // Blue-500
          secondary: '#60a5fa',  // Blue-400
          background: '#eff6ff', // Blue-50
          text: '#172554',       // Blue-950
          accent: '#93c5fd',     // Blue-300
        },
        // Blue dark theme colors
        'b-dark': {
          primary: '#60a5fa',    // Blue-400
          secondary: '#93c5fd',  // Blue-300
          background: '#1e3a8a', // Blue-900
          text: '#dbeafe',       // Blue-100
          accent: '#3b82f6',     // Blue-500
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
