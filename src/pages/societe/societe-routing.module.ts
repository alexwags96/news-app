import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './components/societe/societe.component';
import { SanteComponent } from './components/sante/sante.component';
import { ReligionComponent } from './components/religion/religion.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { GeopolitiqueComponent } from './components/geopolitique/geopolitique.component';

const routes: Routes = [
  {
    path: 'all',
    component: SocieteComponent,
  },
  {
    path: 'sante',
    component: SanteComponent,
  },
  {
    path: 'religion',
    component: ReligionComponent,
  },
  {
    path: 'politique',
    component: PolitiqueComponent,
  },
  {
    path: 'geopolitique',
    component: GeopolitiqueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocieteRoutingModule {}
