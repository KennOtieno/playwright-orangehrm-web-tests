import {test, expect} from '@playwright/test';
import { loginPage } from '../../pages/login.pages';

test('All dashboard widgets are present', async ({page})  => {
    const LoginPage = await new loginPage(page);
    await LoginPage.goto()
    await LoginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);

    // User has to see the widgets. According to the expected results:
    // All default widgets are displayed
    const widgets = page.locator('.oxd-dashboard-widget');
    await expect(widgets).toHaveCount(5);
    

});