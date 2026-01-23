import {test, expect} from '@playwright/test';
import { loginPage} from '../../pages/login.pages';

test('Dashboard loads after login', async ({page}) => {

    const LoginPage = await new loginPage(page);
    await LoginPage.goto();
    await LoginPage.login('Admin', 'admin123');

    // Ensure URL has /dashboad
    await expect(page).toHaveURL(/dashboard/);

    // To have heading Dashboard
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();



});