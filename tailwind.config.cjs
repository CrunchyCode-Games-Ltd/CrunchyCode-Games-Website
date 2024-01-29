const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        /* 
          * 8px is the horizontal (X-axis) offset.
          * 8px is the vertical (Y-axis) offset.
          * 0px is the blur radius, which is set to 0 for no blur.
          * 0px is the spread radius, which is also set to 0.
        */
        solid: "8px 8px 0px 0px rgb(225, 29, 72)",
        "solid-lg": "16px 16px 0px 0px rgb(225, 29, 72)",
      },
    },
  },
  plugins: [],
};
