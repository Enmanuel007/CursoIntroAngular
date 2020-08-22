import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule,
    LayoutModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    LayoutModule
  ]
})
export class MaterialModule { }
