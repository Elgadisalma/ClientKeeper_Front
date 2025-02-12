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
  // Route pour la page d'accueil ou la page de présentation
  { path: '', component: LandingPageComponent },

  // Authentification (Connexion et Inscription)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Dashboard Admin
  { path: 'admin-dashboard', component: AdminDashboardComponent },

  // Gestion des clients
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/approuves', component: ClientApprouveComponent }, // Pour les clients approuvés
  { path: 'clients/:id', component: ClientListComponent }, // Pour afficher un client spécifique, en utilisant un paramètre dynamique

  // Gestion des offres
  { path: 'offres', component: OffreListComponent },
  { path: 'offres/create', component: OffreCreateComponent },

  // Gestion des transactions
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/create', component: TransactionCreateComponent },
  { path: 'transactions/history', component: TransactionHistoryComponent }, // Historique des transactions

  // Redirection vers la page d'accueil si aucune route ne correspond
  { path: '**', redirectTo: '' } // Fallback si aucune route ne correspond
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Utilisation de forRoot pour les routes principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
