import { test, expect } from '@playwright/test';


  test(`should work`, async () => {
    expect(1).toBe(1);
  });

test.skip(`is actually failing`, () => {
  expect(1).toBe(2);
});

test.skip(`this is flaking`, () => {
  expect(test.info().retry).toBe(1);
});
