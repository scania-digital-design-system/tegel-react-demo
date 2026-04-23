import { test, expect } from '@playwright/test';

test.describe('tds-textarea', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/text-area');
  });

  test('textarea renders with label', async ({ page }) => {
    await expect(page.getByText('Hello label').first()).toBeVisible();
  });

  test('textarea shows error helper text', async ({ page }) => {
    await expect(page.getByText('Good guess, but wrong answer buddy').first()).toBeVisible();
  });

  // Attribute reflection
  test('state reflects', async ({ page }) => {
    const textarea = page.locator('tds-textarea').first();
    const attr = await textarea.getAttribute('state');
    expect(attr, 'state attribute should be reflected on the host element').toBe('error');
  });
});
