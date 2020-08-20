import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TableComponent } from './componentes/table/table.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children:[
      {
        path: 'create',
        component: ProductoFormComponent
      },
      {
        path: 'dasboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
