module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
    indentSwitchCase: true,
  },
  globals: {
    process: true,
  },
  plugins: ["react", "jest", "prettier"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.test.js"],
      rules: { "react/prop-types": 0 },
    },
  ],
}
