import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { OffreCreateComponent } from '../../components/offres/offre-create/offre-create.component';
import { OffreListComponent } from '../../components/offres/offre-list/offre-list.component';



const routes: Routes = [
  { path: 'create', component: OffreCreateComponent, canActivate: [AuthGuard]  },
//   { path: 'churn', component: OffreListComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
