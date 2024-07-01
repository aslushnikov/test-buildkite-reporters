import { test, expect } from '@playwright/test';

test.describe('awesome tests', () => {
  test('good test - 1', () => {
      expect(true).toEqual(true);
  });

  test('good test - 2', () => {
      expect(true).toEqual(true);
  });

  test('almost good test', () => {
      const isFlaky = Math.random() > 0.5;
      expect(isFlaky).toEqual(true);
  });
});
