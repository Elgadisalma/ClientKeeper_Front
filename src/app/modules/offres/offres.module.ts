import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreCreateComponent } from '../../components/offres/offre-create/offre-create.component';
import { OffreListComponent } from '../../components/offres/offre-list/offre-list.component';

@NgModule({
  declarations: [OffreCreateComponent, OffreListComponent],
  imports: [CommonModule],
})
export class OffresModule {}
