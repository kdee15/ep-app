const path = require("path");

module.exports = {
  scss: ["./assets/scss/*.scss"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
