import { test, expect } from '@playwright/test';

test('authentication is succesful and dashboatd is displayed', async ({ page }) => {
  await page.goto('https://https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Input valid username and password then press login buttp
  const username = await page.locator('Username');
  const password = await page.locator('Password');
  const loginButton = await page.locator('Login');

  // Next step is to fill them up
  username.fill('Admin');
  password.fill('admin123');
  loginButton.click();

  await expect(page).toHaveURL(/viewSystemUsers/);



});