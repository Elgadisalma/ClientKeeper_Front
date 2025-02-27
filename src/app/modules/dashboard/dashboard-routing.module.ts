import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../../components/dashboard/admin-dashboard/admin-dashboard.component';
import { ChurnBoardComponent } from '../../components/dashboard/churn-board/churn-board.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]  },
  { path: 'churn', component: ChurnBoardComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
