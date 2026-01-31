import { test, expect } from '@playwright/test';

test.describe('Plataforma de Qualidade UI - Fluxo Ponta a Ponta', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // --- MÓDULO 01: AUTENTICAÇÃO E INTERFACE ---
  
  test('CT001 - [Visual] Validar integridade da tela de login', async ({ page }) => {
    await expect(page).toHaveScreenshot('login-screen.png');
  });

  test('CT002 - [Funcional] Login com sucesso (standard_user)', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/inventory/);
  });

  test('CT003 - [Negócio] Validar mensagem de erro com usuário bloqueado', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.');
  });

  // --- MÓDULO 02: CATÁLOGO E CARRINHO ---

  test('CT004 - [Funcional] Adicionar produto ao carrinho via Home', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('CT005 - [Visual] Validar exibição da página de detalhes do produto', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.click('text=Sauce Labs Backpack');
    await expect(page).toHaveScreenshot('product-details.png');
  });

  test('CT006 - [Funcional] Remover produto do carrinho', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });

  // --- MÓDULO 03: CHECKOUT E FINALIZAÇÃO ---

  test('CT007 - [Negócio] Validar erro de campos obrigatórios no Checkout', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.goto('/checkout-step-one.html');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Error: First Name is required');
  });

  test('CT008 - [Funcional] Fluxo completo de compra com sucesso', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.click('.shopping_cart_link');
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Eduardo');
    await page.locator('[data-test="lastName"]').fill('QA');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  // --- MÓDULO 04: MENU E NAVEGAÇÃO ---

  test('CT009 - [Funcional] Validar Logout através do menu lateral', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('CT010 - [Visual] Validar integridade do menu lateral aberto', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.click('#react-burger-menu-btn');
    await expect(page).toHaveScreenshot('side-menu.png');
  });

});