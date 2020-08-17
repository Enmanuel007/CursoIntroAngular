import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponente } from './componentes/producto/producto.componente';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './componentes/productos/productos.component';

import { ProductoRoutingModule } from './producto-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProductoComponente,
    ProductoDetalleComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule {

}
