import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../components/dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, 
            DashboardRoutingModule,
            FormsModule 
          ],
})
export class DashboardModule {}
