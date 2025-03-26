/** @type {import('tailwindcss').Config} */
import colors, { violet } from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      blue:colors.blue,
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: colors.yellow,
      orange: {
        ...colors.orange,
        300: "#7d6eeb",
        400: "#7d6eeb",
        500: "#7d6eeb",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc,
      darkBlue:"#141d30",
      whiteText:"#ebedef",
      borderBlue:"#334155",
      indigoBlue:"#0f172a",
      shadyBlue:"#303a54",
      skyBlue:"#8bc0f1",
      violet:'#7d6eeb' // Accent colors, used mainly for star color, heading and buttons

      // Used mainly for box-shadow
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }   
    },
  },
  
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
