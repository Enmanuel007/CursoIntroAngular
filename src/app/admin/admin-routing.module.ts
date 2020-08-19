import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';

const routes: Routes = [
  {
    path:'create',
    component:ProductoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
