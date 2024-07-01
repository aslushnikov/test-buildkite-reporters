import { test, expect } from '@playwright/test';

test.describe('tests with different errors', () => {
  test('network error', () => {
    throw new Error('This is a network error message');
  });

  test('timeout error', () => {
    throw new Error('This is a timeout error message');
  });
});
