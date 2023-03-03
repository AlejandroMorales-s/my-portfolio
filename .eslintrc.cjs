module.exports = {
  env: {
    browser: true,

    es2021: true,
  },

  extends: ["plugin:react/recommended", "airbnb"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: "latest",

    sourceType: "module",
  },

  plugins: ["react"],

  rules: {
    indent: ["error", 2],

    "linebreak-style": ["error", "windows"],

    "react/prop-types": "off",

    "jsx-quotes": ["error", "double"],

    quotes: ["error", "double", { avoidEscape: true }],
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        quotes: ["error", "double", { avoidEscape: true }],
      },
    },
    {
      files: ["**/*.jsx"],
      rules: {
        quotes: ["error", "double", { avoidEscape: true }],
      },
    },
  ],
};
