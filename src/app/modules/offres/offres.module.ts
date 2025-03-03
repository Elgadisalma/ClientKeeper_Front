import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreCreateComponent } from '../../components/offres/offre-create/offre-create.component';
import { OffreListComponent } from '../../components/offres/offre-list/offre-list.component';
import { FormsModule } from '@angular/forms'; 
import { OffresRoutingModule } from './offres-routing.module';

@NgModule({
  declarations: [OffreCreateComponent, OffreListComponent],
  imports: [CommonModule, 
              OffresRoutingModule,
              FormsModule 
            ],
})
export class OffresModule {}
