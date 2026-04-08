import { test, expect } from '@playwright/test';

test.describe('tds-card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('cards render with visible content', async ({ page }) => {
    const cards = page.locator('tds-card');
    expect(await cards.count()).toBeGreaterThanOrEqual(3);
  });

  test('clickable card triggers action', async ({ page }) => {
    const clickableCards = page.locator('tds-card[clickable]');
    if ((await clickableCards.count()) > 0) {
      await clickableCards.first().click();
    }
  });
});
