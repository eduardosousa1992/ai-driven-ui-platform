import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  /* Executa os testes em arquivos em paralelo */
  fullyParallel: true,
  /* Falha o build no CI se houver test.only no código */
  forbidOnly: !!process.env.CI,
  /* Tentativas apenas no CI */
  retries: process.env.CI ? 2 : 0,
  /* Opt out de testes paralelos no CI para maior estabilidade */
  workers: process.env.CI ? 1 : undefined,
  /* Repórter HTML para visualizar os resultados */
  reporter: 'html',
  
  /* Configurações compartilhadas para todos os projetos */
  use: {
    /* Base URL para os testes (Sauce Demo para Fase 1) */
    baseURL: 'https://www.saucedemo.com',

    /* Coleta traços em caso de falha */
    trace: 'on-first-retry',

    /* EVIDÊNCIAS PARA PORTFÓLIO: Ativando vídeos e prints */
    video: 'on',             // Grava vídeo de todas as execuções
    screenshot: 'on',        // Tira print de cada passo final
    
    launchOptions: {
      slowMo: 500,           // Deixa o robô mais lento para o vídeo ficar visível
    },
  },

  /* Configuração para os principais navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Exemplos de Mobile (Descomentado para valorizar o portfólio na Fase 1) */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});