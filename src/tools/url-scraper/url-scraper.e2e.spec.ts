import { test, expect } from '@playwright/test';

test.describe('Tool - Url scraper', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/url-scraper');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Url scraper - IT Tools');
  });

  test('', async ({ page }) => {

  });
});