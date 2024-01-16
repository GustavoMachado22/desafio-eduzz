import { Locator } from '@playwright/test';

import { HomeGooglePage } from './HomeGooglePage';

export class HomeGoogleLocators {
  readonly campoBuscaGoogle: Locator;
  readonly botaoPesquisaGoolge: Locator;
  readonly selecionarPaginaEduzz: Locator;

  constructor(page: HomeGooglePage) {
    this.campoBuscaGoogle = page.locate('textarea[type="search"]');
    this.botaoPesquisaGoolge = page.locate('button', { name: 'Pesquisa Google' });
    this.selecionarPaginaEduzz = page.locate('s:Eduzz - O Ecossistema para Vender e Ensinar Online - Eduzz');
  }
}
