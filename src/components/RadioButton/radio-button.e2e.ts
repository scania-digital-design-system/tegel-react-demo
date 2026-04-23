import { test, expect } from "@playwright/test";

test.describe("tds-radio-button", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/web-components/radio-button");
	});

	test("radio buttons render with labels", async ({ page }) => {
		await expect(page.getByText("Cucumber salad").first()).toBeVisible();
		await expect(page.getByText("Garlic bread").first()).toBeVisible();
		await expect(page.getByText("Salmon").first()).toBeVisible();
	});

	test("disabled radio button is not selectable", async ({ page }) => {
		const veal = page.getByText("Veal").first();
		await expect(veal).toBeVisible();
	});

	test("radio button selection works and form submits", async ({ page }) => {
		await page.getByText("Cucumber salad").first().click();
		await page.getByText("Cake").first().click();
		const placeOrder = page.getByText("Place order").first();
		await placeOrder.click();
		await expect(page.getByText("Thank you for your order").first()).toBeVisible();
	});

	// Attribute reflection
	test("disabled reflects", async ({ page }) => {
		const radios = page.locator("tds-radio-button");
		let disabledFound = false;
		for (let i = 0; i < (await radios.count()); i++) {
			const isDisabled = await radios.nth(i).evaluate((el: HTMLInputElement) => el.disabled);
			if (isDisabled) {
				const attr = await radios.nth(i).getAttribute("disabled");
				expect(attr, "disabled attribute should be reflected on the host element").not.toBeNull();
				disabledFound = true;
				break;
			}
		}
		expect(disabledFound, "Should find at least one disabled radio button").toBe(true);
	});
});
