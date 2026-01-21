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
  
});

// Login with invalid credetintials
test('Invalid credential', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const username = page.getByPlaceholder('Username');
  const password = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', {name: 'Login'});

  // Fill in with valid username and Invalid password
  await username.fill('Admin');
  await password.fill('ADMIN123');
  await loginButton.click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Invalid Credentials')).toBeVisible();


});

// Login with empty credentials
test('Empty credentials', async ({page}) => {
  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const username = await page.getByPlaceholder('Username');
  const password = await page.getByPlaceholder('Password');
  const loginButton = await page.getByRole('button', {name: 'Login'});

  // They need to be empty
  await username.fill('');
  await password.fill('');
  await loginButton.click();

  await expect(page.getByText('Required')).toBeVisible;
  await expect(page).toHaveURL(/login/);


});