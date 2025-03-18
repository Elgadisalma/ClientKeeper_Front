import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../../components/dashboard/admin-dashboard/admin-dashboard.component';
import { ChurnBoardComponent } from '../../components/dashboard/churn-board/churn-board.component';
import { AuthGuard } from '../../guards/auth.guard';
import { AdminGuard } from '../../guards/admin.guard';
import { TransactionsHistoryComponent } from '../../components/dashboard/transactions-history/transactions-history.component';


const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard]  },
  { path: 'churn', component: ChurnBoardComponent, canActivate: [AuthGuard, AdminGuard]  },
  { path: 'transactions', component: TransactionsHistoryComponent, canActivate: [AuthGuard, AdminGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
