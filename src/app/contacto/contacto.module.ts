import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule {

}
