import { Page, expect } from '@playwright/test';
import { AbstractPage } from '@eduzz/e2e-playwright-base';

import { HomeEduzzLocators } from './HomeEduzzLocators';

export class HomeEduzzPage extends AbstractPage<HomeEduzzLocators> {
  constructor(page: Page) {
    super(page);
    this.pageLocator = new HomeEduzzLocators(this);
  }

  public get locators() {
    return this.pageLocator;
  }

  public async validarPaginaInicialEduzz() {
    const { linkPaginaInicial } = this.pageLocator;
    await expect(linkPaginaInicial).toBeVisible();
  }

  public async validarBoasVindas(texto: string) {
    const { boasVindasEduzz } = this.pageLocator;
    await boasVindasEduzz.toHaveText(texto);
  }
}
