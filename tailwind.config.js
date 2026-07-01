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
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        dark: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm':   ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'base': ['1rem',     { lineHeight: '1.7', letterSpacing: '0' }],
        'lg':   ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl':   ['1.25rem',  { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl':  ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl':  ['3rem',     { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '7xl':  ['4.5rem',   { lineHeight: '1',    letterSpacing: '-0.04em' }],
      },
      screens: {
        'xs': '375px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
