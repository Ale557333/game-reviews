/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './src/app/components/**/*.jsx'],
  content: [
    './src/**/*.jsx', 
    './src/app/components/**/*.jsx',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


