import {test, expect} from '@playwright/test';
import { loginPage } from '../../pages/login.pages';

test('Edits employee details', async ({page}) => {

    const LoginPage = new loginPage(page);
    await LoginPage.goto();
    await LoginPage.login('Admin', 'admin123');

    await page.getByRole('link', {name: 'PIM'}).click();

    const empname = 'Charles';
    await page.getByPlaceholder('Employee Name').fill(empname);
    await page.getByRole('button', {name: 'Search'}).click(),

    await page.getByRole('cell', {name: empname}).click();

    // Editing names
    const newLastName = 'Juma';
    const newLastNameField = page.getByPlaceholder('Last Name');
    await newLastNameField.fill(newLastName);

    await page.getByRole('button', {name: 'Save'}).click();

    await expect(page.getByText('Successfuly Updated')).toBeVisible();
    await expect(newLastNameField).toHaveValue(newLastName);


});