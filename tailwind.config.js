const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo1: ["Sansita Swashed, cursive"],
        logo2: ["Bilbo Swash Caps, cursive"],
      },
    },
  },
  plugins: [],
});
