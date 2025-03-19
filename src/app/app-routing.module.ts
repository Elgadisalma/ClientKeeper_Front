import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/guests/landing-page/landing-page.component';
import { AboutUsPageComponent } from './components/guests/about-us-page/about-us-page.component';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';


const routes: Routes = [
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '', component: LandingPageComponent }, // Page d'accueil ("/")
  { path: 'about-us', component: AboutUsPageComponent }, // Page About Us

  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'offres', loadChildren: () => import('./modules/offres/offres.module').then(m => m.OffresModule) },
  { path: 'transactions', loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'admin', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection vers "/"
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
