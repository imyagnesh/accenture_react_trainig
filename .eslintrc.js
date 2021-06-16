module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
