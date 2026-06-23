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
      screens: {
        mob: { max: '680px' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        turn: {
          '0%':   { transform: 'rotate(0deg)'   },
          '100%': { transform: 'rotate(360deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)'    },
          '50%':      { transform: 'scale(1.12)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'    },
          '40%':      { opacity: '0.25', transform: 'scale(0.82)' },
          '70%':      { opacity: '0.8', transform: 'scale(1.08)' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg)'   },
          '100%': { transform: 'rotate(360deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(-1px)' },
          '50%':      { transform: 'translateY(1px)'  },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)'  },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1.6deg)' },
          '50%':      { transform: 'rotate(1.6deg)'  },
        },
      },
      animation: {
        turn:    'turn 18s linear infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        twinkle: 'twinkle 2.5s ease-in-out infinite',
        orbit:   'orbit 10s linear infinite',
        bob:     'bob 5s ease-in-out infinite',
        sway:    'sway 7s ease-in-out infinite',
        wobble:  'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
