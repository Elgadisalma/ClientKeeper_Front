import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';
import { AuthModule } from './modules/auth/auth.module';
import { provideHttpClient } from '@angular/common/http';   


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,    
    NavbarComponent,
    AppRoutingModule,
    AuthModule  
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
