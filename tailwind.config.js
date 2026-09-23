/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f5f5f5",
        muted: "#888888",
        accent: {
          DEFAULT: "#A9DFFF",
          glow: "rgba(169, 223, 255, 0.15)",
          hover: "rgba(169, 223, 255, 0.25)",
        },
        surface: {
          DEFAULT: "#0a0a0a",
          border: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      }
    },
  },
  plugins: [],
}
