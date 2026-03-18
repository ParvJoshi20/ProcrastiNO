import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#062325",
        brandCream: "#E9E6DD",
        brandPink: "#F87DC7",
        brandYellow: "#FBD954",
        brandNeon: "#BFFB11",
        brandPurple: "#9B90F9",
        brandLavender: "#9894DE",
        graysoft: "#717871",
        brandRust: "#8F391C",
        brandSand: "#AF995B"
      }
    }
  },
  plugins: []
}

export default config