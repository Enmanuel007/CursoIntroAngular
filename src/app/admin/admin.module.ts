import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [ProductoFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
