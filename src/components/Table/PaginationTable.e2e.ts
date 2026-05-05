import { test, expect } from "@playwright/test";

test.describe("on table page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/table");
	});

	test("navigation on pagination table footer", async ({ page }) => {
		const section = page.getByLabel("pagination");
		expect(section).toBeVisible();

		expect(section.getByText("of 4 pages")).toBeVisible();

		const chevronLastPage = section.getByRole("button").nth(3); // flakyyyyy
		// navigate to last page
		await chevronLastPage.click();

		// expect number of pages to stay the same -- CDEP-1737
		expect(section.getByText("of 4 pages")).toBeVisible();

		// verify that the chevron button is now disabled
		await expect(chevronLastPage).toBeDisabled();

		const dropdown = section.getByRole("button", { name: "Select rows per page" });
		// open dropdown to select rows per page
		await dropdown.click();

		// select option "4 rows per page"
		await section.getByRole("option", { name: "4" }).click();

		// expect total number of pages to change to 2
		expect(section.getByText("of 2 pages")).toBeVisible();

		// expect input of page number to be 2 (last page)
		expect(section.getByRole("spinbutton")).toHaveValue("2");
	});
});
