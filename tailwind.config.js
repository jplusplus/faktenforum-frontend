// eslint-disable-next-line @typescript-eslint/no-var-requires
const { mix, toRgba, transparentize } = require("color2k");
const colors = require("tailwindcss/colors");

function setShades(colorValue, levels = []) {
  return Object.assign(
    { DEFAULT: toRgba(colorValue) },
    ...levels.map((level) => ({
      [level]: level > 100 ? mix(colorValue, "black", level / 100 - 1) : mix(colorValue, "white", 1 - level / 100)
    }))
  );
}

const linkColor = "#43a796";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: ["bg-success", "bg-warning", "bg-danger"],
  theme: {
    colors: {
      gray: { 100: "#FFFFFF", 200: "#F8F8F8", 300: "#E6E6E6", 400: "#CECECE", 500: "#B3B3B3", 600: "#707070", 700: "#333333" },
      red: { DEFAULT: "#FF5064" },
      green: { DEFAULT: "#4FFF75" },
      yellow: { DEFAULT: "#FDE162" },
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      slate: colors.slate
    }
  },
  plugins: []
};
