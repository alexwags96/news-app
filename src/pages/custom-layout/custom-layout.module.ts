import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLayoutRoutingModule } from './custom-layout-routing.module';
import { CustomLayoutComponent } from './components/custom-layout/custom-layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CustomLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomLayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class CustomLayoutModule { }
