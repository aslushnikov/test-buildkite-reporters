import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['dot'],
    ['buildkite-test-collector/playwright/reporter'],
  ],
});
