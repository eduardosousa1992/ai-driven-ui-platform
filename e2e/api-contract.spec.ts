import { test, expect } from '@playwright/test';

test.describe('API Contract & Data Integrity - Sauce Demo', () => {
  
  test('CT011 - [API] Validar contrato da página principal', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('CT012 - [API] Validar disponibilidade de Assets de Produto', async ({ request }) => {
    const response = await request.get('/static/media/sauce-backpack-1200x1500.0a0b8539.jpg');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/jpeg');
  });

});
