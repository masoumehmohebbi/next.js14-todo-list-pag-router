import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue1: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        // .. rest of the colors
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;
