import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponente } from './componentes/producto.componente';
import { from } from 'rxjs';
import { CartaComponent } from './carta/carta.component';
import { ExponetialPipe } from './exponetial.pipe';
import { ExponencialPipe } from './exponencial.pipe';
import { HighligntDirective } from './highlignt.directive';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponente,
    CartaComponent,
    ExponetialPipe,
    ExponencialPipe,
    HighligntDirective,
    ProductosComponent,
    ContactoComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotfoundComponent,
    ProductoDetalleComponent,
    LayoutComponent
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
