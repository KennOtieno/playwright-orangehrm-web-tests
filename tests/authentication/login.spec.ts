import { test, expect } from '@playwright/test';

test('authentication is succesful and dashboatd is displayed', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Input valid username and password then press login buttp
  await page.getByPlaceholder('Username').fill(process.env.TEST_USERNAME!);
  await page.getByPlaceholder('Password').fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', {name: 'Login'}).click();

// If it has this, it's a pass
  await expect(page).toHaveURL(/dashboard/);

  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
  
});

// Login with invalid credetintials
test('Invalid credential', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill(process.env.TEST_USERNAME!);
  await page.getByPlaceholder('Password').fill(process.env.TEST_INVALID_PASSWORD);
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Invalid Credentials')).toBeVisible();

});

// Login with empty credentials
test('Empty credentials', async ({page}) => {
  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').fill('');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText('Required')).toBeVisible;
  await expect(page).toHaveURL(/login/);

});