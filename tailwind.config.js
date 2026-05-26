/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#080808',
        surface: '#121212',
        'surface-2': '#181818',
        accent:  '#d4a84b',
        'accent-dim': 'rgba(212,168,75,0.12)',
        text:    '#f0ebe3',
        'text-2': '#9a9188',
        'text-muted': '#4a4540',
        border:  'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-xl': 'clamp(3rem, 8vw, 7rem)',
        'fluid-2xl': 'clamp(4rem, 12vw, 11rem)',
        'fluid-3xl': 'clamp(5rem, 16vw, 15rem)',
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      transitionDuration: {
        800: '800ms',
        1200: '1200ms',
      },
    },
  },
  plugins: [],
}
