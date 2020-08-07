// eslint-disable-next-line import/no-webpack-loader-syntax
const sassVars = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../../styles/_variables.scss');

const lightTheme = {
  body: sassVars.veryLightGrayLm,
  text: sassVars.veryDarkBlueLm,
  headerShadow: sassVars.headerShadowLm,
  headerBg: sassVars.white,
  cardsBg: sassVars.white,
  boxShadow: sassVars.boxShadowLm,
  buttonBg: sassVars.headerBgLm,
  white: sassVars.white,
  buttonHoverBg: sassVars.buttonHoverLm,
  inputBg: sassVars.white,
  inputPlaceholderText: 'hsl(0deg 0% 0% / 30%)',
  dropdownBg: sassVars.white,
  dropdownHoverText: sassVars.veryDarkBlueLm,
};
const darkTheme = {
  body: sassVars.veryDarkBlueDm,
  text: sassVars.white,
  headerShadow: sassVars.headerShadowDm,
  headerBg: sassVars.headerBgDm,
  cardsBg: sassVars.headerBgDm,
  boxShadow: sassVars.boxShadowDm,
  buttonBg: sassVars.headerBgDm,
  white: sassVars.white,
  buttonHoverBg: sassVars.buttonHoverDm,
  inputBg: sassVars.headerBgDm,
  inputPlaceholderText: sassVars.white,
  dropdownBg: sassVars.headerBgDm,
  dropdownHoverText: sassVars.headerBgDm,
};

export { lightTheme, darkTheme };
