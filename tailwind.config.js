const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "custom-yellow": "#FFD85F",
  },
};
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/ui"),
  ],
  theme: {
    colors: colors,
  },
};
