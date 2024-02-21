/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': 'rgb(232,221,203)',
        'sunshine': 'rgb(238,203,115)',
        'seafoam': 'rgb(180,212,206)',
        'sienna': 'rgb(210,92,52)',
        'azure': 'rgb(56,107,172)',
        'powder': 'rgb(209,222,231)'
      },
      fontFamily: {
        'display': ['Milchella']
      }
    },
  },
  plugins: [],
}

