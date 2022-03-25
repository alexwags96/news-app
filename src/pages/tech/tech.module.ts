import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './components/tech/tech.component';
import { IaComponent } from './components/ia/ia.component';
import { RobotiqueComponent } from './components/robotique/robotique.component';
import { InnovationComponent } from './components/innovation/innovation.component';
import { NumeriqueComponent } from './components/numerique/numerique.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NewsServiceService } from 'src/services/news-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TechComponent,
    IaComponent,
    RobotiqueComponent,
    InnovationComponent,
    NumeriqueComponent,
  ],
  imports: [
    CommonModule,
    TechRoutingModule,
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
export class TechModule {}
