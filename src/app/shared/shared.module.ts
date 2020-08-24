import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HighligntDirective } from './directivas/highlignt/highlignt.directive';
import { CartaComponent } from './componentes/carta/carta.component';

import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    ExponencialPipe,
    HeaderComponent,
    FooterComponent,
    HighligntDirective,
    CartaComponent
  ],
  exports: [
    ExponencialPipe,
    HeaderComponent,
    FooterComponent,
    HighligntDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
