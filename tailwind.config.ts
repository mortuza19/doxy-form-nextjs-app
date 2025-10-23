import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {},
    spacing: {},
    borderRadius: {},
    extend: {
      colors: {
        secondary: {
          50: "#000000",
          100: "#f3f4f6",
          200: "#eeeeee",
          300: "#e0e0e0",
        },
        primary: {
          100: "#E9EEFF",
          500: "#2A56FF",
          800: "#2E7D32",
        },
      },
      fontFamily: {
        // Add your custom fonts here based on theme.ts
      },
      spacing: {
        // Add custom spacing if needed
      },
      borderRadius: {
        // Add custom border radius if needed
      },
    },
  },
  plugins: [],
};

export default config;
