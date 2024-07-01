import { defineConfig } from '@playwright/test';
import { CurrentsConfig, currentsReporter } from "@currents/playwright";

const currentsConfig: CurrentsConfig = {
  ciBuildId: process.env.CURRENTS_CI_BUILD_ID, // 📖 https://currents.dev/readme/guides/ci-build-id
  recordKey: process.env.CURRENTS_RECORD_KEY, // 📖 https://currents.dev/readme/guides/record-key
  projectId: "0aqaxy", // get one at https://app.currents.dev
};

export default defineConfig({
  retries: 3,
  reporter: [
    ['line'],
    ['buildkite-test-collector/playwright/reporter'],
    ["allure-playwright"],
    [currentsReporter(currentsConfig)],
  ],
});
