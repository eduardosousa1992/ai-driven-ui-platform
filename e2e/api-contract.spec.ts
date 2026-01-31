@'
import { test, expect } from '@playwright/test';

test.describe('API Contract & Data Integrity - Sauce Demo', () => {
  
  // Como o site é estático, vamos validar a integridade dos recursos principais
  test('CT011 - [API] Validar contrato da página principal', async ({ request }) => {
    // Validando o endpoint principal que serve os dados da UI
    const response = await request.get('/');
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // Garantindo a integridade do tipo de dado (BI Readiness)
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('CT012 - [API] Validar disponibilidade de Assets de Produto', async ({ request }) => {
    // Validando se a imagem do produto principal está acessível (evita quebra na UI)
    const response = await request.get('/static/media/sauce-backpack-1200x1500.0a0b8539.jpg');
    
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/jpeg');
  });

});
'@ | Out-File -FilePath e2e/api-contract.spec.ts -Encoding utf8