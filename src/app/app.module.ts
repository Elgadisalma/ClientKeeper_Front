import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,    
    NavbarComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
