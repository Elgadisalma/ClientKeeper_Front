import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreCreateComponent } from '../../components/offres/offre-create/offre-create.component';
import { FormsModule } from '@angular/forms'; 
import { OffresRoutingModule } from './offres-routing.module';

@NgModule({
  declarations: [OffreCreateComponent],
  imports: [CommonModule, 
              OffresRoutingModule,
              FormsModule 
            ],
})
export class OffresModule {}
