import { test, expect } from '@playwright/test';

for (let i = 0; i < 1000; ++i) {
  test(`should work #${i}`, async () => {
    expect(1).toBe(1);
  });
}

test.skip(`is actually failing`, () => {
  expect(1).toBe(2);
});

test(`this is flaking`, () => {
  expect(test.info().retry).toBe(1);
});
