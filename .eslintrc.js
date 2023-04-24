module.exports = {
  root: true,
  env: {
    node: true,
    "react-native/react-native": true,
  },
  extends: ["@react-native-community", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    quotes: "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "react/display-name": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    semi: "off",
    "no-console": "off",
    "react-native/no-inline-styles": "off",
    "require-atomic-updates": "off",
  },
  globals: {
    process: "readonly",
    JSX: "readonly",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
