import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "serif"],
      },
      colors: {
        background: "hsl(210 35% 98%)",
        foreground: "hsl(222 24% 18%)",
        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(222 24% 18%)",
        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(222 24% 18%)",
        primary: "hsl(222 58% 28%)",
        "primary-foreground": "hsl(0 0% 100%)",
        secondary: "hsl(210 30% 94%)",
        "secondary-foreground": "hsl(222 24% 20%)",
        muted: "hsl(210 25% 92%)",
        "muted-foreground": "hsl(215 14% 42%)",
        accent: "hsl(198 55% 32%)",
        "accent-foreground": "hsl(0 0% 100%)",
        border: "hsl(210 22% 88%)",
        input: "hsl(210 22% 88%)",
        ring: "hsl(222 58% 28%)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        soft: "0 14px 35px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
