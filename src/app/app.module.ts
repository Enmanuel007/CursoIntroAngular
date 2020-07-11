import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponente } from './componentes/producto.componente'
  import { from } from 'rxjs';
import { CartaComponent } from './carta/carta.component';
import { ExponetialPipe } from './exponetial.pipe';
import { ExponencialPipe } from './exponencial.pipe';
import { HighligntDirective } from './highlignt.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponente,
    CartaComponent,
    ExponetialPipe,
    ExponencialPipe,
    HighligntDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
