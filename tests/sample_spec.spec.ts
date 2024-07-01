import { test, expect } from '@playwright/test';

test.describe('Sample Test Suite', () => {
  test('should pass', () => {
      expect(true).toEqual(true);
  });

  test('should pass for sure', () => {
      expect(true).toEqual(true);
  });

  test('should be flaky', () => {
      const isFlaky = Math.random() > 0.5;
      expect(isFlaky).toEqual(true);
  });

  test.skip('should fail', () => {
      expect(true).toEqual(false);
  });
});
