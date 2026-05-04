import { test, expect } from '@playwright/test';

test.describe('tds-tabs', () => {
  test.describe('on web-components page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/web-components/tabs');
    });

    test('folder tabs render', async ({ page }) => {
      const folderTabs = page.locator('tds-folder-tabs');
      expect(await folderTabs.count()).toBeGreaterThanOrEqual(1);
    });

    test('tab items are visible', async ({ page }) => {
      await expect(page.getByText('First tab').first()).toBeVisible();
    });
  });

  test.describe('on tabs-buttons page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/tabs-buttons');
    });

    test('tab components render', async ({ page }) => {
      const tabs = page.locator('tds-folder-tabs, tds-inline-tabs, tds-navigation-tabs');
      expect(await tabs.count()).toBeGreaterThanOrEqual(1);
    });
  });
});
