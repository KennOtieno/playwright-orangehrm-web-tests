import { test, expect } from '@playwright/test';

test('authentication is succesful and dashboatd is displayed', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Input valid username and password then press login buttp
  const username = await page.getByPlaceholder('Username');
  const password = await page.getByPlaceholder('Password');
  const loginButton = await page.getByRole('button', {name: 'Login'});

  // Next step is to fill them up
  await username.fill('Admin');
  await password.fill('admin123');
  await loginButton.click();

// If it has this, it's a pass
  await expect(page).toHaveURL(/dashboard/);

  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

  await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();



});