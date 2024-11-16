/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFCC80',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
          lighter: '#FFE0B2',
          darker: '#E65100',
        },
        secondary: {
          light: '#eae2b7',
          DEFAULT: '#fcbf49',
          dark: '#f77f00',
          lighter: '#fff3cd',
          darker: '#c77d00',
        },
        text: {
          light: '#FFFFFF',
          "light-muted": '#e7e7e7',
          DEFAULT: '#212121',
          dark: '#000000',
          muted: '#757575',
          contrast: '#333333',
        },
        background: {
          light: '#FFF8E1',
          DEFAULT: '#F4F4F4',
          dark: '#E0E0E0',
          lighter: '#FFFFFF',
          darker: '#BDBDBD',
        },
        card: {
          light: '#FFE0B2',
          DEFAULT: '#003049',
          dark: '#001f3f',
          lighter: '#E3F2FD',
          darker: '#001f3f',
        },
        border: {
          light: '#E0E0E0',
          DEFAULT: '#003049',
          dark: '#001f3f',
        },
        accent: {
          light: '#FFEB3B',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        error: {
          light: '#EF9A9A',
          DEFAULT: '#D32F2F',
          dark: '#F44336',
        },
        success: {
          light: '#A5D6A7',
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
        },
        warning: {
          light: '#FFE082',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        info: {
          light: '#81D4FA',
          DEFAULT: '#29B6F6',
          dark: '#0288D1',
        },
      },
    },
  },
  plugins: [],
}