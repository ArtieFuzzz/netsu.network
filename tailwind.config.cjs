/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte,ts,js,html}'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        amber: {
          '--tw-prose-pre-bg': 'transparent',
          '--tw-prose-headings': 'white',
          '--tw-prose-links': 'white',
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

