import { expect, test } from '@playwright/test';
import { readFile } from 'fs/promises';
import { shownName } from '../src/lib/services';

const reportFile = await readFile('src/lib/logs.json', 'utf-8');
const report: {
	site: Array<{
		name: string;
		status: Array<{ timestamp: number; result: boolean }>;
	}>;
} = JSON.parse(reportFile);

test('Verify that report is not empty', () => {
	expect(report.site.length).toBeGreaterThan(0);
});

test('Shows how everything is doing, in one line', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('status').getByText(/All systems operational|Partial outage|Total outage/)
	).toBeVisible();
});

report.site.forEach(({ name }) => {
	test(`Verifying that ${shownName(name)} status is visible`, async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('heading', { name: shownName(name) })).toBeVisible();
	});
});
