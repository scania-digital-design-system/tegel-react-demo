import { test, expect } from '@playwright/test';

test.describe('tds-stepper', () => {
  test.describe('on web-components page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/web-components');
    });

    test('stepper renders with steps', async ({ page }) => {
      const steps = page.locator('tds-step');
      expect(await steps.count()).toBeGreaterThanOrEqual(4);
    });
  });

  test.describe('on stepper page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/stepper');
    });

    test('stepper renders with steps', async ({ page }) => {
      const steppers = page.locator('tds-stepper');
      expect(await steppers.count()).toBeGreaterThanOrEqual(1);
    });

    test('stepper text fields are interactive', async ({ page }) => {
      const fields = page.locator('tds-text-field');
      expect(await fields.count()).toBeGreaterThanOrEqual(1);
    });
  });
});
