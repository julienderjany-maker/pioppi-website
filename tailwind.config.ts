import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F0E6",
        olive: "#5F6F45",
        sage: "#A8B68F",
        cocoa: "#6B4F3F",
        sand: "#D8C3A5"
      }
    }
  },
  plugins: []
};
export default config;
