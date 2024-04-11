/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e60023",
        "primary-dark": "#d50c22",

        background: "#ffffff",
        foreground: "#d2e3fc",
        border: "#dadce0",
        "border-dark": "#a5a5a5",

        copy: "#333333",
        "copy-light": "#111111",
        "copy-lighter": "#767676",

        success: "#01ff01",
        warning: "#ffff01",
        error: "#ff0101",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
