import { test, expect } from '@playwright/test';

test.describe('API Contract & Data Integrity - Sauce Demo', () => {
  
  test('CT011 - [API] Validar contrato da página principal', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('CT012 - [API] Validar integridade do Favicon (Asset Crítico)', async ({ request }) => {
    // Validando o favicon, que é um asset essencial e estável para a identidade da marca
    const response = await request.get('/favicon.ico');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/x-icon');
  });

});
