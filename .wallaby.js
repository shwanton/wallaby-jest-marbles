module.exports = function(wallaby) {
  return {
    files: ["src/index.js"],
    tests: ["src/index.test.js"],
    env: { type: "node", runner: "node" },
    testFramework: "jest",
    debug: true,
  };
};
