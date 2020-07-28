import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponente } from './producto/producto.componente';
import { from } from 'rxjs';
import { CartaComponent } from './carta/carta.component';
import { ExponetialPipe } from './shared/pipes/exponencial/exponetial.pipe';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponente,
    CartaComponent,
    ExponetialPipe,
    ProductosComponent,
    ContactoComponent,
    DemoComponent,
    PageNotfoundComponent,
    ProductoDetalleComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
