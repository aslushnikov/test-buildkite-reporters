import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['line'],
    ['buildkite-test-collector/playwright/reporter'],
  ],
});
