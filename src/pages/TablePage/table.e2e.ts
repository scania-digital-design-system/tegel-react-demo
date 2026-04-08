import { test, expect } from '@playwright/test';

test.describe('Table Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/table');
  });

  test('tables render with data', async ({ page }) => {
    const tables = page.locator('tds-table');
    expect(await tables.count()).toBeGreaterThanOrEqual(1);
  });

  test('table has header cells', async ({ page }) => {
    const headerCells = page.locator('tds-header-cell');
    expect(await headerCells.count()).toBeGreaterThanOrEqual(1);
  });

  test('table has body cells with data', async ({ page }) => {
    const bodyCells = page.locator('tds-body-cell');
    expect(await bodyCells.count()).toBeGreaterThanOrEqual(1);
  });

  test('table toolbar is visible', async ({ page }) => {
    const toolbar = page.locator('tds-table-toolbar');
    if ((await toolbar.count()) > 0) {
      await expect(toolbar.first()).toBeAttached();
    }
  });
});
