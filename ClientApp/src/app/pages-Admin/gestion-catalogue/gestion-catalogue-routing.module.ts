import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCataloguePage } from './gestion-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCataloguePageRoutingModule {}
