import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #2F5FA7)",
          hover: "var(--color-primary-hover, #244C87)",
        },
        secondary: "var(--color-secondary, #4F79B9)",
        cta: {
          DEFAULT: "var(--color-cta, #F2B705)",
          hover: "var(--color-cta-hover, #D99E04)",
        },
        bms: {
          bg: "var(--background-main, #FFFFFF)",
          section: "var(--background-section, #F7F9FC)",
          divider: "var(--color-divider, #EDEDED)",
          primary: "var(--text-primary, #1F2A44)",
          secondary: "var(--text-secondary, #4A5568)",
          inverse: "var(--text-inverse, #FFFFFF)",
        }
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"]
      }
    }
  },
  plugins: []
};

export default config;

