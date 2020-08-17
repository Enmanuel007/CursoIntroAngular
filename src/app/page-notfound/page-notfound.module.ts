import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  PageNotfoundComponent} from './componentes/page-notfound/page-notfound.component';
import { PageNotFoundRoutingModule } from './page-notfound-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    PageNotfoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {

}
