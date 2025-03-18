import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AdminGuard } from '../../guards/admin.guard';
import { OffreCreateComponent } from '../../components/offres/offre-create/offre-create.component';

const routes: Routes = [
  { path: 'create', component: OffreCreateComponent, canActivate: [AuthGuard, AdminGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
