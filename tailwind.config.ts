import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive:   "#5C6B3A",
        "olive-light": "#8B9E58",
        "olive-pale":  "#D6DFC4",
        cocoa:   "#2C1A0E",
        cream:   "#FAF6F0",
        sand:    "#D6C9A8",
        sage:    "#A8BCA1",
        matcha:  "#C8D89A",
        tangerine: "#E96D39",
        sunshine:  "#F4B942",
        blush:     "#F2A0AE",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%":      { transform: "rotate(4deg)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "marquee-reverse": "marqueeReverse 28s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 5s ease-in-out infinite",
        wiggle: "wiggle 0.3s ease-in-out 3",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
