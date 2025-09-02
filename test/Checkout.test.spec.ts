// tests/Checkout.test.spec.ts
import { test, expect } from "@playwright/test";
import LoginPage from "../page/Login.page";
import ProductsPage from "../page/Products.page";
import CartPage from "../page/Cart.page";
import CheckoutPage from "../page/Checkout.page";
import * as users from "../data/credentials.json";

test.describe("Checkout Flow @checkout", () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);

        // Login
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();

        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    });

    test("Positive: Complete checkout with 2 products and verify confirmation", async ({ page }) => {
        // Add products to cart
        await productsPage.addToCart("backpack");
        await productsPage.addToCart("bike-light");
        expect(await productsPage.getCartItemsAmount).toBe("2");

        // Navigate to cart
        cartPage = new CartPage(page);
        await productsPage.navigateToCart();
        expect(await cartPage.getTitle).toBe("Your Cart");

        // Proceed to checkout
        await page.locator("[data-test='checkout']").click();

        checkoutPage = new CheckoutPage(page);

        // Fill checkout info
        await checkoutPage.fillCheckoutInformation("Virendra", "Kumar", "12345");

        // Finish checkout
        await checkoutPage.finishCheckout();

        // Verify order confirmation
        await checkoutPage.verifyOrderConfirmation("Thank you for your order!");
    });
});
