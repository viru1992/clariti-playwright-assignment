// src/page/Checkout.page.ts
import { Page, expect } from "@playwright/test";
import * as selectors from '../utils/selectors.json';

export default class CheckoutPage {
    constructor(public page: Page) {}

    // Locators
    get firstNameInput() { return this.page.locator(selectors.CheckoutPage.firstName); }
    get lastNameInput() { return this.page.locator(selectors.CheckoutPage.lastName); }
    get postalCodeInput() { return this.page.locator(selectors.CheckoutPage.postalCode); }
    get continueButton() { return this.page.locator(selectors.CheckoutPage.continueButton); }
    get finishButton() { return this.page.locator(selectors.CheckoutPage.finishButton); }
    get confirmationMessage() { return this.page.locator(selectors.CheckoutPage.confirmationMessage); }

    // Methods
    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async verifyOrderConfirmation(expectedMessage: string) {
        await expect(this.confirmationMessage).toHaveText(expectedMessage);
    }
}
