import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanteRoutingModule } from './sante-routing.module';
import { SanteComponent } from './components/sante/sante.component';


@NgModule({
  declarations: [
    SanteComponent
  ],
  imports: [
    CommonModule,
    SanteRoutingModule
  ]
})
export class SanteModule { }
