const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo1: ["Sansita Swashed, cursive"],
        logo2: ["Bilbo Swash Caps, cursive"],
      },
      lineClamp: {
        10: "10",
        12: "12",
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
