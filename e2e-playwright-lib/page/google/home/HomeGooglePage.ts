import { Page } from '@playwright/test';
import { AbstractPage } from '@eduzz/e2e-playwright-base';

import { HomeGoogleLocators } from './HomeGoogleLocators';

export class HomeGooglePage extends AbstractPage<HomeGoogleLocators> {
  constructor(page: Page) {
    super(page);
    this.pageLocator = new HomeGoogleLocators(this);
  }

  public get locators() {
    return this.pageLocator;
  }

  public async vaiParaAbaGoogle() {
    await this.page.goto('https://www.google.com.br');
  }

  public async realizaPesquisaNoGoogle(busca: string) {
    const { campoBuscaGoogle, botaoPesquisaGoolge } = this.pageLocator;
    await campoBuscaGoogle.fill(busca);
    await botaoPesquisaGoolge.press('Enter');
  }

  public async clicarNoResultado() {
    const { selecionarPaginaEduzz } = this.pageLocator;
    await selecionarPaginaEduzz.click();
  }
}
