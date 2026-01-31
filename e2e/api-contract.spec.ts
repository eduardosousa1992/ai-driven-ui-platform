import { test, expect } from '@playwright/test';

test.describe('API Contract & Data Integrity - Sauce Demo', () => {
  
  // Exemplo de teste de contrato para validar se o inventário está acessível via rede
  test('CT011 - [API] Validar contrato da lista de produtos', async ({ request }) => {
    const response = await request.get('https://www.saucedemo.com/v1/inventory.html');
    
    // Validando se o status é 200 (OK)
    expect(response.ok()).toBeTruthy();
    
    // Na sua pós da ESPM, a integridade do dado é tudo. 
    // Aqui garantimos que o cabeçalho de resposta é o esperado.
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('CT012 - [API] Validar tempo de resposta (Performance/IA)', async ({ request }) => {
    const start = Date.now();
    const response = await request.get('https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b8539.jpg');
    const duration = Date.now() - start;

    // Se a API demorar mais de 800ms, o BI pode receber dados atrasados ou causar churn
    expect(duration).toBeLessThan(800);
    expect(response.status()).toBe(200);
  });

});
