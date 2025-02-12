import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AboutUsPageComponent } from './components/guests/about-us-page/about-us-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    OffreCreateComponent,
    OffreListComponent,
    TransactionHistoryComponent,
    TransactionCreateComponent,
    TransactionListComponent,
    ClientListComponent,
    RegisterComponent,
    LoginComponent,
    ClientApprouveComponent,
    LandingPageComponent,
    AboutUsPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
