import { Locator } from '@playwright/test';

import { HomeEduzzPage } from './HomeEduzzPage';

export class HomeEduzzLocators {
  readonly linkPaginaInicial: Locator;
  readonly boasVindasEduzz: Locator;

  constructor(page: HomeEduzzPage) {
    this.linkPaginaInicial = page.locate('a[href$="www.eduzz.com/pt-br"]');
    this.boasVindasEduzz = page.locate('s:O Ecossistema Completo para Vender e Ensinar Online');
  }
}
