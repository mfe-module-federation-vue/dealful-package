module.exports = {
  preset: "ts-jest",
  testMatch: ["**/?(*.)+(spec).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest",
    // "^.+\\.js$": "babel-jest",
  },
  // moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["/node_modules/(?!nanoevents)"],
};
