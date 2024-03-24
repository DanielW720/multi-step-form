import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "374px",
      },
      colors: {
        // Primary
        marineBlue: "#02295a",
        purplishBlue: "#473dff",
        lightBlue: "#bfe2fd",
        strawberryRed: "#ed3548",
        // Neutral
        coolGray: "#9699ab",
        lightGray: "#d6d9e6",
        bgMagnolia: "#f0f6ff",
        alabaster: "#fafbff",
      },
    },
  },
  plugins: [],
};
export default config;
