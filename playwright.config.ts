import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporters: [
    ['line'],
    ['buildkite-test-collector/playwright/reporter'],
  ],
});
