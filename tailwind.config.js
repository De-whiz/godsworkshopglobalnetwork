/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F3F6',
          100: '#F0E3EC',
          200: '#E0C5D9',
          300: '#C69FB8',
          400: '#A26B92',
          500: '#8B4D7B',
          600: '#6B2D5B',
          700: '#552449',
          800: '#441C3A',
          900: '#34152C',
          950: '#24100F',
        },
        accent: {
          50: '#FBF7EA',
          100: '#F5EBC8',
          200: '#EADB9B',
          300: '#DDC56B',
          400: '#D2B452',
          500: '#C9A84C',
          600: '#A8893A',
          700: '#876C2C',
          800: '#685222',
        },
        ivory: '#FAF7F2',
        'ivory-dark': '#F1EBE2',
        ink: '#1C1B28',
        slate: '#6B7280',
        line: '#EAE4DA',
        success: '#2D7D46',
        error: '#C0392B',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 20px rgba(28,27,40,0.06)',
        lift: '0 12px 32px rgba(107,45,91,0.12)',
      },
    },
  },
  plugins: [],
}