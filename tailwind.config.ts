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
        black0: "#1B1E3100",
        black25: "#1B1E3125",
        black50: "#1B1E3150",
        black70: "#1B1E3170",
        black80: "#1B1E3180",
        black: "#1B1E31",
        gray: "#F6F8FF",
        gray25: "#F6F8FF25",
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
        12: "48px",
        14: "56px",
        15: "60px",
        16: "64px",
        18: "72px",
        20: "80px",
        50: "200px"
      },
      borderRadius: {
        sm: "12px",
        DEFAULT: "16px",
        md: "24px",
      },
      backgroundImage: {
        "menu-bg": "url('/images/menu-bg.svg')",
        "social-media-bg": "url('/images/social-media-bg.svg')",
      },
      boxShadow: {
        sm: "0 0 20px 5px rgba(0,0,0,0.1)"
      }
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
      "5xl": "64px",
      "6xl": "96px",
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
