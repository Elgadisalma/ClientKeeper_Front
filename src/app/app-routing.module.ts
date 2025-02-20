import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/guests/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent },

  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'clients', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }, 
  { path: 'offres', loadChildren: () => import('./modules/offres/offres.module').then(m => m.OffresModule) },
  { path: 'transactions', loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'admin', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: '**', redirectTo: 'welcome' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
