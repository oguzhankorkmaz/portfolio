import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#fff",
        black: "#000",
        gray: "#f3f3f3",
      },
      screens: {
        sm: "100%",
        md: "816px",
        lg: "1024px",
        xl: "1248px",
        "2xl": "1248px",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        9: "36px",
        10: "40px",
        18: "72px",
        20: "80px",
      },
      borderRadius: {
        DEFAULT: "16px",
        md: "24px",
      },
      backgroundImage: {
        "menu-bg": "url('/images/menu-bg.svg')",
        "social-media-bg": "url('/images/social-media-bg.svg')",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "36px",
      "3xl": "40px",
      "4xl": "48px",
      "5xl": "96px",
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
  },
  plugins: [],
} satisfies Config;
