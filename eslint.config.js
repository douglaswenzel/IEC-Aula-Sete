// eslint.config.js
// @ts-check
import js from "@eslint/js";
import globals from "globals"; // <— adicione isto

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ["node_modules/**", "coverage/**", "dist/**"] },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node
        ...globals.node,
        // Globais de teste (Jest) — IMPORTANTEEEE
        ...globals.jest,
      }
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-undef": "error"
    }
  },

  // Opcional: garantir os globais do Jest apenas nos arquivos de teste
  {
    files: ["tests/**/*.test.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      "no-console": "off"
    }
  }
];