import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProductosComponent} from './productos/productos.component';
import {ContactoComponent} from './contacto/contacto.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';


const routes: Routes = [
  /*Redirección si no se coloca parametro en la ruta*/
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 /*-----------------------------------*/
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },

  /*Página Not Found si se escribe una ruta no válida*/
  {
    path: '**',
    component: PageNotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
