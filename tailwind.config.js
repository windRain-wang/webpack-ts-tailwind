module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    appearance: [],
  },
  plugins: [],
};
