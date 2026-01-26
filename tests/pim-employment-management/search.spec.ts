import {test, expect} from '@playwright/test';
import { loginPage } from '../../pages/login.pages';

test('Employee exists', async ({page}) => {
    const LoginPage = new loginPage(page);
    await LoginPage.goto();
    await LoginPage.login('Admin', 'admin123');

    await page.getByRole('link', {name: 'PIM'});

    const empname = await page.getByPlaceholder('Employee name');
    await empname.fill('Charles Carter');
    
    await page.getByRole('button', {name: 'Search'}).click();

    await expect(page.getByRole('cell', {name: 'empname'})).toBeVisible();
});