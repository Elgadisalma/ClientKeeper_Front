import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientKeeper';
  currentRoute: string = ''; 

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Normaliser l'URL pour éviter les problèmes
        this.currentRoute = event.urlAfterRedirects.split('?')[0]; 
      });
  }
}
