import { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!**/vendor/**",
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage/",
        "package.json",
        "package-lock.json",
        "reportWebVitals.ts",
        "setupTests.ts",
        "index.tsx",
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
};

export default config;
