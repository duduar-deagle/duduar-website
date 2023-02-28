const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["var(--font-default)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-header)", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        neutralWhite: "#e6e6e6",
        neutralBlack: "#212121",
        carbon: "#1c1c1c",
        cyberBlue: "#00ffe9",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          "a, button": { cursor: "default" },
        },
      });
    },
  ],
};
