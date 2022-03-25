import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './components/tech/tech.component';
import { IaComponent } from './components/ia/ia.component';
import { RobotiqueComponent } from './components/robotique/robotique.component';
import { InnovationComponent } from './components/innovation/innovation.component';
import { NumeriqueComponent } from './components/numerique/numerique.component';

const routes: Routes = [
  {
    path: '',
    component: TechComponent,
  },
  {
    path: 'ia',
    component: IaComponent,
  },
  {
    path: 'robotique',
    component: RobotiqueComponent,
  },
  {
    path: 'innovation',
    component: InnovationComponent,
  },
  {
    path: 'numerique',
    component: NumeriqueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechRoutingModule {}
