import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 3,
  reporter: [
    ['line'],
    ['buildkite-test-collector/playwright/reporter'],
  ],
});
