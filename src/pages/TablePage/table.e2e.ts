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

  test('shows the no-data slot for an empty table', async ({ page }) => {
    const section = page.getByLabel('empty', { exact: true });

    await expect(section.getByText('No vehicles yet')).toBeVisible();
    await expect(section.getByRole('group', { name: 'Vehicle types' })).toBeVisible();
    await expect(section.getByRole('button', { name: 'Add vehicle' })).toBeVisible();
  });

  test('shows and clears the filtered empty state', async ({ page }) => {
    const section = page.getByLabel('filter', { exact: true });
    const table = section.locator('tds-table');
    const rows = table.locator('tds-table-body-row');

    const initialRowCount = await rows.count();
    expect(initialRowCount).toBeGreaterThan(0);

    await expect(section.getByText('No data found')).toBeHidden();

    await section.locator('tds-table-toolbar').locator('tds-button').click();

    const search = section.getByRole('textbox', { name: 'Search...' });
    await search.fill('no-matching-vehicle-12345');
    await search.press('End');

    await expect(rows).toHaveCount(0);
    await expect(section.getByText('No data found')).toBeVisible();

    await section.getByRole('button', { name: 'Clear filters' }).click();

    await expect(rows).toHaveCount(initialRowCount);
    await expect(section.getByText('No data found')).toBeHidden();

    await section.locator('tds-table-toolbar').locator('tds-button').click();
    await expect(search).toHaveValue('');
  });
});
