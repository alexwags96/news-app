import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'sport',
    loadChildren: () =>
      import('../sport/sport.module').then((m) => m.SportModule),
  },
  {
    path: 'sante',
    loadChildren: () =>
      import('../sante/sante.module').then((m) => m.SanteModule),
  },
  {
    path: 'tech',
    loadChildren: () => import('../tech/tech.module').then((m) => m.TechModule),
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'societe',
    loadChildren: () =>
      import('../societe/societe.module').then((m) => m.SocieteModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomLayoutRoutingModule {}
