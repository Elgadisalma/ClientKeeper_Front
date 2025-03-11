import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css'],
  standalone: false
})
export class ClientNavbarComponent implements OnInit {
  showBalance = false;
  userData: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.fetchCurrentUser().subscribe({
      next: (user) => {
        if (user) {
          this.userData = user;
        } else {
          console.warn("Aucun utilisateur trouvé.");
        }
      },
      error: (err) => console.error('Erreur lors de la récupération de l’utilisateur :', err)
    });
  }

  toggleBalance() {
    this.showBalance = !this.showBalance;
  }
}
