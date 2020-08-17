import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductoDetalleComponent} from './componentes/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: ':id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductoRoutingModule {}
