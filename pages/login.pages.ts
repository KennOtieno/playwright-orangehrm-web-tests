import { Page } from "@playwright/test";
import {Page, Locator} from '@playwright/test';

export class loginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});

    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.username.fill('Admin');
        await this.password.fill('admin123');
        await this.loginButton.click();
    }


}