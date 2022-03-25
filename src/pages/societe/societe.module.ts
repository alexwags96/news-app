import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './components/societe/societe.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { GeopolitiqueComponent } from './components/geopolitique/geopolitique.component';
import { SanteComponent } from './components/sante/sante.component';
import { ReligionComponent } from './components/religion/religion.component';
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
    SocieteComponent,
    PolitiqueComponent,
    GeopolitiqueComponent,
    SanteComponent,
    ReligionComponent,
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
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
export class SocieteModule {}
