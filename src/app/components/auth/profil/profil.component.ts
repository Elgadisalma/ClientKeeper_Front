import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
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
}
