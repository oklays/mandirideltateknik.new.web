import js from "@eslint/js";
import baseConfig from "./base.mjs";

export default [...baseConfig, js.configs.recommended];

