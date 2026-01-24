import {test, expect} from '@playwright/test';
import { loginPage } from '../../pages/login.pages';

test('Employee details is creaated & displayed successfully ', async ({page}) => {
    const LoginPage = new loginPage(page);
    LoginPage.goto();
    LoginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL('/dashboard/');


    // Going to PIM
    await page.getByRole('list', {name: 'PIM'}).click();

    // Clicking on add 
    await page.getByRole('button', {name: '+Add'}).click();

    // Fill employee details
    await page.getByPlaceholder('First Name').fill('Biggie');
    await page.getByPlaceholder('Last Name').fill('Smalls');

    await page.getByRole('button', {name: 'Save'}).click();

    // Expected Results
    await expect(page).toHaveURL(/viewPersonalDetails/);
    await expect(page.getByRole('heading', {name: 'Personal Details'})).toBeVisible();


    

});