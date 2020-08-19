import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';
import { from } from 'rxjs';


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
        loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule)
      },
      {
        path: 'contacto',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
      },

      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
   
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  /*Página Not Found si se escribe una ruta no válida*/
  {
    path: '**',
    loadChildren: () => import('./page-notfound/page-notfound.module').then(m => m.PageNotFoundModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
