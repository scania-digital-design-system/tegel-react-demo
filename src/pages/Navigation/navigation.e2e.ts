import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('header renders with title', async ({ page }) => {
    await expect(page.getByText('React Demo').first()).toBeVisible();
  });

  test('side menu renders with navigation items', async ({ page }) => {
    const sideMenu = page.locator('tds-side-menu');
    await expect(sideMenu.first()).toBeAttached();
    await expect(page.getByText('About us').first()).toBeVisible();
  });

  test('side menu navigation works', async ({ page }) => {
    await page.getByText('About us').first().click();
    await expect(page).toHaveURL(/.*about/);
  });

  test('footer renders with links', async ({ page }) => {
    const footer = page.locator('tds-footer');
    await expect(footer.first()).toBeAttached();
  });

  test('header dropdown navigates to About', async ({ page }) => {
    const wheelTypes = page.getByText('Wheel types').first();
    await wheelTypes.click();
    await page.getByText('About').first().click();
    await expect(page).toHaveURL(/.*about/);
  });
});
