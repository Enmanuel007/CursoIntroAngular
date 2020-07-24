import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {ProductosComponent} from './productos/productos.component';
import {ContactoComponent} from './contacto/contacto.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {ProductoDetalleComponent} from './producto-detalle/producto-detalle.component';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [
  /*Redirección si no se coloca parametro en la ruta*/
  {
    path: '',
    component: LayoutComponent, /*Vistas aninadas home, productos y contacto*/
    children: [

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'productos/:id',
        component: ProductoDetalleComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
    ]
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
