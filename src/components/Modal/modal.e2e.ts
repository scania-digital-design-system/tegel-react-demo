import { test, expect } from "@playwright/test";

test.describe("tds-modal", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/web-components/modal");
	});

	test("modal page full behavior", async ({ page }) => {
		// First modal pops up when rendering the page
		const modalOnOpen = page.getByRole("dialog", {name: "Modal opening at start"});
		await expect(modalOnOpen).toBeVisible();

		// Click to close and verify that it closed
		await modalOnOpen.getByRole("button", { name: "Close"}).click();
		await expect(modalOnOpen).not.toBeVisible();

		// Expect to have three buttons visible
		const smallModalButton = page.getByRole("button", { name: "Small Modal" });
		await expect(smallModalButton).toBeVisible();

		const mediumModalButton = page.getByRole("button", { name: "Medium Modal" });
		await expect(mediumModalButton).toBeVisible();

		const largeModalButton = page.getByRole("button", { name: "Large Modal" });
		await expect(largeModalButton).toBeVisible();

		// Click on first modal (small)
		await smallModalButton.click();

		// Expect to see that dialog/modal
		const smallModal = page.getByRole("dialog", { name: "Small modal with prevent" });
		await expect(smallModal).toBeVisible();

		// Click to close and verify that it closed
		await smallModal.getByRole("button", { name: "Close" }).click();
		await expect(smallModal).not.toBeVisible();

		// Click on second modal (medium)
		await mediumModalButton.click();

		// Expect to see that dialog/modal
		const mediumModal = page.getByRole("dialog", { name: "Medium modal" });
		await expect(mediumModal).toBeVisible();
		
		// Click to close and verify that it closed
		await mediumModal.getByRole("button", { name: "Close" }).click();
		await expect(mediumModal).not.toBeVisible();

		// Click on third modal (large)
		await largeModalButton.click();

		// Expect to see that dialog/modal
		const largeModal = page.getByRole("dialog", { name: "Large modal" });
		await expect(largeModal).toBeVisible();

		// Click to close and verify that it closed
		await largeModal.getByRole("button", { name: "Close" }).click();
		await expect(largeModal).not.toBeVisible();

		// Expect to have icon visible
		const icon = page.getByRole("img", { name: "Hover over this icon to open a modal" });
		await expect(icon).toBeVisible();

		// Hover over icon and expect the modal to open
		await icon.hover();
		const hoverModal = page.getByRole("dialog", { name: "Modal opening on hover" });
		await expect(hoverModal).toBeVisible();

		// Click to close and verify that it closed
		await hoverModal.getByRole("button", { name: "Close" }).click();
		await expect(hoverModal).not.toBeVisible();
	});
});
