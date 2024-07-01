import { test, expect } from '@playwright/test';

for (let i = 0; i < 100; ++i) {
  test(`data test #${i}`, () => {
    const isFlaky = Math.random() > 0.5;
    expect(isFlaky).toEqual(true);
  });
}
