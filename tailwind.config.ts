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
        'primary' : {light:'#3e4c74', DEFAULT:'#2E3856', dark:'#242b42',},
        'secondary': '#0A092D',
        'accent' : {light:'#f3c03f', DEFAULT:'#EFB00F', dark:'#c08d0c',},
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
