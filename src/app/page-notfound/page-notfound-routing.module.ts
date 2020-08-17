import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotfoundComponent } from './componentes/page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotfoundComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule {}
