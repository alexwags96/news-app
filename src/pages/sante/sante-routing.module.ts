import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanteComponent } from './components/sante/sante.component';

const routes: Routes = [
  {
    path: '',
    component: SanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanteRoutingModule { }
