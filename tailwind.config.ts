import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        taxi: {
          black: "#08090b",
          ink: "#151515",
          gold: "#f4b000",
          amber: "#ffd166",
          green: "#20b46b",
          cream: "#fbf7ed"
        }
      },
      boxShadow: {
        glow: "0 24px 70px rgba(244, 176, 0, 0.2)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
