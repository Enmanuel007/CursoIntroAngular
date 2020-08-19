import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  PageNotfoundComponent} from './componentes/page-notfound/page-notfound.component';
import { PageNotFoundRoutingModule } from './page-notfound-routing.module';


@NgModule({
  declarations: [
    PageNotfoundComponent,
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {

}
