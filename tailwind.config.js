// This file exists to enable the Tailwind CSS Intellisense extension in VS Code.
// It could be placed within rollup.config.js in-place of `tailwindConfig` if you're not using the extension.

// used for integration with Animate.css.
const withAnimations = require("animated-tailwindcss");

const config = withAnimations({
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = config;
