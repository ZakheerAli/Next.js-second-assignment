import type { Config } from "tailwindcss";

const config: Config = {
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
        darkBlue: "#252B42",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      inset: {
        '-590': '-590px', // Custom negative top position
        '-720': '-720px', // Custom negative left position
      },
      width: {
        '187':'187px',
        '1440': '1440px', // Custom width for 1440px
      },
      height: {
        '58':'58px',
        '1132': '1132px', // Custom height for 1132px
      },
    },
  },
  plugins: [],
};
export default config;
