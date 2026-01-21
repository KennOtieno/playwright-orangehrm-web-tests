import { test, expect } from '@playwright/test';

test('User is logged out', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Log in first

    const username = await page.getByPlaceholder('Username');
    const password = await page.getByPlaceholder('Password');
    const loginButton = await page.getByRole('button', {name: 'Login'});

    await username.fill('Admin');
    await password.fill('admin123');
    await loginButton.click();

    await expect(page).toHaveURL(/dashboard/);

    // Click user dropdown and then click the log out button
    const userDropdown = await page.locator('.oxd-userdropdown-menu');
    const logoutButton = await page.getByRole('button', {name: 'Logout'});

    await userDropdown.click();

    await expect(page).toHaveURL(/dashboard/);

    // Click the log out button
    await logoutButton.click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});