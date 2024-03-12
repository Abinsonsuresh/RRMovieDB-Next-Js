/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ], darkMode: 'class',
  theme: {
    extend: {
      backgroundColor:{
        primary: 'var( --color-bg-primary)',
        secondary: 'var( --color-bg-secondary)',
        button: 'var( --color-bg-button)'

      },
      textColor: {
        accent: 'var( --color-text-accent)',
        primary: 'var(   --color-text-primary)',
        secondary: 'var( --color-text-secondary)',
        btnText: 'var(--color-bg-secondary)'
      },
      borderColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-text-accent)',
      },
    },
  },
  plugins: [],
};
