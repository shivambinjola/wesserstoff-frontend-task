import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "640px" },
        gf: { min: "0px", max: "280px" },
        ...defaultTheme.screens,
      },
      fontFamily: { KronaOne: ["Inter", "Krona One", "sans-serif"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        collectionSlideFirstbg: "url('../assets/slide-img-1.svg')",
        collectionSlideSecbg: "url('../assets/slide-img-2.svg')",
        collectionSlideThirdbg: "url('../assets/slide-img-3.svg')",
        collectionSlideFourthbg: "url('../assets/slide-img-4.svg')",
        collectionSlideFifthbg: "url('../assets/slide-img-5.svg')",
        collectionSlideSixthbg: "url('../assets/slide-img-6.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 40%, 0)" },
          "100%": { transform: "translate3d(0, -100%, 0)" },
        },
        marquee2: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-200%)" },
        },

        progressbar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },

        widthscale: { "0%": { width: "18%" }, "100%": { width: "32%" } },
        widthscale2: { "0%": { width: "40%" }, "100%": { width: "47.2%" } },
        widthscale3: { "0%": { width: "20%" }, "100%": { width: "30%" } },
        widthscale4: { "0%": { width: "10%" }, "100%": { width: "26.1%" } },
        widthscale5: { "0%": { width: "20%" }, "100%": { width: "22.4%" } },
        widthscale6: { "0%": { width: "16%" }, "100%": { width: "19.6%" } },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
        progressbar: "progressbar 8s linear forwards",
        widthscale: "widthscale 2.5s linear infinite alternate",
        widthscale2: "widthscale2 2s linear infinite alternate",
        widthscale3: "widthscale3 2.5s linear infinite alternate",
        widthscale4: "widthscale4 2.5s linear infinite alternate",
        widthscale5: "widthscale5 2s linear infinite alternate",
        widthscale6: "widthscale6 1.9s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
