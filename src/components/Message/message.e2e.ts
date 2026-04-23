import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-message', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/message');
  });

  test('messages render with correct headers', async ({ page }) => {
    const messages = page.locator('tds-message');
    expect(await messages.count()).toBeGreaterThanOrEqual(3);
  });

  test('icon toggle controls message icon visibility', async ({ page }) => {
    const iconToggle = page.locator('tds-toggle').filter({ hasText: 'With Icon' });
    await expect(iconToggle).toBeVisible();
  });

  test('minimal toggle controls message style', async ({ page }) => {
    const minimalToggle = page.locator('tds-toggle').filter({ hasText: 'Minimal' });
    await expect(minimalToggle).toBeVisible();
  });

  // Attribute reflection
  test('variant reflects', async ({ page }) => {
    const message = page.locator('tds-message').first();
    const attr = await message.getAttribute('variant');
    expect(attr, 'variant attribute should be reflected on the host element').not.toBeNull();
  });

  test('no-icon reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-message', 'noIcon', true, 'no-icon');
  });

  test('minimal reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-message', 'minimal', true, 'minimal');
  });
});
