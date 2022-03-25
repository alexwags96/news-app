import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './components/sport/sport.component';
import { FootballComponent } from './components/football/football.component';
import { BasketComponent } from './components/basket/basket.component';
import { HandballComponent } from './components/handball/handball.component';
import { TennisComponent } from './components/tennis/tennis.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
  },
  {
    path: 'football',
    component: FootballComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'handball',
    component: HandballComponent,
  },
  {
    path: 'tennis',
    component: TennisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportRoutingModule {}
