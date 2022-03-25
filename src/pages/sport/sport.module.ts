import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './components/sport/sport.component';
import { FootballComponent } from './components/football/football.component';
import { BasketComponent } from './components/basket/basket.component';
import { HandballComponent } from './components/handball/handball.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NewsServiceService } from '../../services/news-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TennisComponent } from './components/tennis/tennis.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SportComponent,
    FootballComponent,
    BasketComponent,
    HandballComponent,
    TennisComponent,
  ],
  imports: [
    CommonModule,
    SportRoutingModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [NewsServiceService],
})
export class SportModule {}
