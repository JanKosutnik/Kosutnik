import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdfdfc',
        ink:   '#1a1a18',
        muted: '#807d73',
        intro: '#34322c',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        news: ['var(--font-news)', 'Georgia', 'serif'],
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':       { transform: 'rotate(2deg)'  },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(-0.8px)' },
          '50%':       { transform: 'translateY(1px)'   },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1.6deg)' },
          '50%':       { transform: 'rotate(1.6deg)'  },
        },
      },
      animation: {
        sway:   'sway 7s ease-in-out infinite',
        bob:    'bob 5s ease-in-out infinite',
        wobble: 'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
