import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './componentes/nav/nav.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TableComponent } from './componentes/table/table.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';


@NgModule({
  declarations: [ProductoFormComponent, NavComponent, DashboardComponent, TableComponent, ProductoListaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
