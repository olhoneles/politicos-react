module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
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
  plugins: ["react", "prettier"],
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
