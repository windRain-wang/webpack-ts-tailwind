module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    "postcss-preset-env": {
      features: {
        "focus-within-pseudo-class": false,
      },
    },
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      safelist: ["html", "body"],
      keyframes: true
    },
  },
};
