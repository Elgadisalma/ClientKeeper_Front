import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { OffreCreateComponent } from './components/offres/offre-create/offre-create.component';
import { OffreListComponent } from './components/offres/offre-list/offre-list.component';
import { TransactionHistoryComponent } from './components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from './components/transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ClientApprouveComponent } from './components/clients/client-approuve/client-approuve.component';
import { LandingPageComponent } from './components/guests/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },

  { path: 'clients', component: ClientListComponent },
  { path: 'clients/approuves', component: ClientApprouveComponent },
  { path: 'clients/:id', component: ClientListComponent }, 

  { path: 'offres', component: OffreListComponent },
  { path: 'offres/create', component: OffreCreateComponent },

  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/create', component: TransactionCreateComponent },
  { path: 'transactions/history', component: TransactionHistoryComponent },


  { path: '**', redirectTo: 'welcome' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // Utilisation de forRoot pour les routes principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
