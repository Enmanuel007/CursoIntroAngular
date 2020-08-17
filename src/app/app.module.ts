import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CartaComponent } from './carta/carta.component';
import { ExponetialPipe } from './shared/pipes/exponencial/exponetial.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    ExponetialPipe,
    ContactoComponent,
    DemoComponent,
    PageNotfoundComponent,
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
