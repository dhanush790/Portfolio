/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07070a",
        surface: "#0e0e14",
        "surface-card": "#13131d",
        "surface-card-hover": "#191926",
        border: "rgba(255, 255, 255, 0.08)",
        "border-highlight": "rgba(168, 85, 247, 0.3)",
        primary: {
          DEFAULT: "#9333ea",
          light: "#a855f7",
          dark: "#7e22ce",
        },
        accent: {
          purple: "#9333ea",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          cyan: "#06b6d4"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' }
        }
      }
    },
  },
  plugins: [],
}
