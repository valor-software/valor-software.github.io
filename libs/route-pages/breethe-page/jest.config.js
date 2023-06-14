module.exports = {
  displayName: "route-pages-breethe-page",
  preset: "../../../jest.preset.js",
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  globals: {},
  coverageDirectory: "../../../coverage/libs/route-pages/breethe-page",
  transform: {
    "^.+\\.(ts|js|html)$": [
      "jest-preset-angular",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        stringifyContentPathRegex: "\\.(html|svg)$",
      },
    ],
  },
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
};
