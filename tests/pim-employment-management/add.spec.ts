import {test, expect} from '@playwright/test';
import { loginPage } from '../../pages/login.pages';

test('Employee details is creaated & displayed successfully ', async ({page}) => {
    const LoginPage = new loginPage(page);
    await LoginPage.goto();
    await LoginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);


    // Going to PIM
    await page.getByRole('link', {name: 'PIM'}).click();

    await expect(page.getByRole('heading', {name: 'Employee Information'})).toBeVisible();

    // Clicking on add 
    const addButton = await page.getByRole('button', {name: 'Add'});
    await expect(addButton).toBeVisible();
    await addButton.click();

    // Fill employee details
    const firstName = await page.getByPlaceholder('First Name');
    await expect(firstName).toBeVisible();
    await firstName.fill('Biggie');
    await page.getByPlaceholder('Last Name').fill('Smalls');

    await page.getByRole('button', {name: 'Save'}).click();

    // Expected Results
    await expect(page).toHaveURL(/viewPersonalDetails/);
    await expect(page.getByText('Personal Details')).toBeVisible();


});