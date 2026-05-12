import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals.js";
import baseConfig from "./base.mjs";

export default [...baseConfig, js.configs.recommended, ...nextVitals];
