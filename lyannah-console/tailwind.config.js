const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      danger: colors.black,
      success: colors.black,
      link: colors.black,
      overlay: colors.black,
      black: colors.black,
      grey: colors.gray,
      lemon: {
        800: "#293D2F",
        100: "#28B851",
        50: "#92E7AA",
      },
      iris: {
        350: "#5d5fef",
        750: "#090A5D",
      },
      grey: {
        900: "#232323",
        950: "#1A1A1A",
        650: "#555555",
        500: "#868686",
      },
    },
    fontSize: {
      xs: ".68rem",
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
