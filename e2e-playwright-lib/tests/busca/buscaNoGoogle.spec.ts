import { test, expect } from '@playwright/test';

import { HomeGooglePage } from '../../page/google/home/HomeGooglePage';
import { HomeEduzzPage } from '../../page/eduzz/home/HomeEduzzPage';

test.beforeEach(async ({ page }) => {
  const paginaInicialGoogle = new HomeGooglePage(page);
  await paginaInicialGoogle.vaiParaAbaGoogle();
});

test('@paginaInicial @busca - Validar o texto na pagina inicial da Eduzz', async ({ page }) => {
  const paginaInicialGoogle = new HomeGooglePage(page);
  const paginaInicialEduzz = new HomeEduzzPage(page);

  await paginaInicialGoogle.realizaPesquisaNoGoogle('Eduzz');
  await paginaInicialGoogle.clicarNoResultado();

  await paginaInicialEduzz.validarPaginaInicialEduzz();

  const { boasVindasEduzz } = paginaInicialEduzz.locators;
  await expect(boasVindasEduzz).toBeVisible();
  await expect(boasVindasEduzz).toContainText('O Ecossistema Completo para Vender e Ensinar Online');
});
