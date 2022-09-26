const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      danger: colors.red,
      success: colors.black,
      link: colors.black,
      overlay: colors.black,
      black: colors.black,
      grey: colors.gray,
      red: {
        300: "#b90000",
        700: "#750000",
        950: "#21000048",
      },
      lemon: {
        800: "#293D2F",
        100: "#28B851",
        50: "#92E7AA",
        faded: "#344539",
      },
      iris: {
        350: "#5d5fef",
        750: "#090A5D",
        750: "#090A5D",
        faded: "#222236",
      },
      grey: {
        900: "#232323",
        950: "#1A1A1A",
        650: "#555555",
        500: "#868686",
      },
    },
    fontSize: {
      xs: ".675rem",
      ss: ".775rem",
      sm: ".875rem",
      tiny: ".975rem",
      button: ".9rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
