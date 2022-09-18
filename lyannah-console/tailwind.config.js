module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   "green-200": "#5D5FEF",
    // },
    extend: {},
  },
  colors: {
    white: colors.white,
    black: colors.black,
    grey: colors.gray,
    purple: {
      400: "#623B82",
      800: "#372868",
      850: "#261854",
      900: "#1C1044",
      deepPurple: "#450A54",
      neutralPurple: "#623B82",
      mildPurple: "#CBBCFF",
    },
    accent: {
      deepRed: "#4B1130",
      aqua: "#4DEEEC",
      tealGreen: "#184254",
      blue: "#005DB3",
    },
    gray: {
      950: "#141414",
      800: "#191919",
    },
    green: {
      950: "#002706",
      700: "#218B06",
    },
  },
  plugins: [],
};
