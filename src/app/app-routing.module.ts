import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< Updated upstream
const routes: Routes = [];
=======
const routes: Routes = [
  // Route pour la page d'accueil ou la page de présentation
  { path: 'welcome', component: LandingPageComponent },

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
  { path: '**', redirectTo: 'welcome' } // Fallback si aucune route ne correspond
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
