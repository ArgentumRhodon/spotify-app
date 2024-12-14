import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      // tests run much faster
      isolatedModules: true,
    },
  },
  // setupFilesAfterEnv: ['./tests/bootstrap.ts']
};
export default config;
