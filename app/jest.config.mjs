import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverage: true,
  coverageReporters: ["lcov", "json", "html", "text", "text-summary"],
  collectCoverageFrom: ["<rootDir>/**/*.ts", "<rootDir>/**/*.tsx"],
};

export default createJestConfig(config);
