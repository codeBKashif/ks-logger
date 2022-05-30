module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      compiler: "ttypescript",
    },
  },
  roots: ["<rootDir>/tests/"],
  maxWorkers: 2,
  testEnvironment: "node",
  collectCoverageFrom: ["src/*"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "d.ts"],
};
