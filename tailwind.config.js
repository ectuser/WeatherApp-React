/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/typography',
    daisyui,
  ],
  daisyui: {
    themes: ["light"]
  }
}

