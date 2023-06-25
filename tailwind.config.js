/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/images/desktop-hero.jpg')",
        'benefits-banner': "url('/images/kingship banner new.jpg')",
        'aboutBanner': "url('/images/about banner.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
