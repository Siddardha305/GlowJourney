import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      colors: {
        "theme-bg-dark": "#FFF9F5",      // Cream (Main BG)
        "theme-bg-light": "#FFFFFF",     // White (Cards/Secondary)
        "theme-accent": "#3E2723",       // Dark Brown (Buttons/Accents)
        "theme-accent-hover": "#5D4037", // Lighter Brown (Hover)
        "theme-text": "#3E2723",         // Dark Brown (Text)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
}
export default config
