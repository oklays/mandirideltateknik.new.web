"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const drizzle_kit_1 = require("drizzle-kit");
const path_1 = require("path");
// Load environment variables from the root .env file
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in the environment variables.");
}
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: "./src/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});
