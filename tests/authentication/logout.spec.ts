import { test, expect } from '@playwright/test';

test('User is logged out', async ({page}) => {
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    const useProfileDropdown = await page.getByRole('list', {name: 'mandapavan vasudev'});
    const LogoutButton = await page.getByRole('button', {name: 'Logout'});

    expect (page).toHaveURL('/login/');
});