import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../components/dashboard/admin-dashboard/admin-dashboard.component';
import { ChurnBoardComponent } from '../../components/dashboard/churn-board/churn-board.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [AdminDashboardComponent, ChurnBoardComponent],
  imports: [CommonModule, 
            DashboardRoutingModule,
            FormsModule 
          ],
})
export class DashboardModule {}
