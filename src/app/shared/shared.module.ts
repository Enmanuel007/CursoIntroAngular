import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HighligntDirective } from './directivas/highlignt/highlignt.directive';

import { MaterialModule } from './../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    ExponencialPipe,
    HeaderComponent,
    FooterComponent,
    HighligntDirective
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
    MatIconModule,
    MatBadgeModule

  ]
})
export class SharedModule { }
