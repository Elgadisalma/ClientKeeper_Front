import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent {
  user: User = {
    nom: '',
    prenom: '',
    cin: '',
    dateNaissance: '',
    sexe: '',
    adresse: '',
    profession: '',
    phoneNumber: '',
    email: '',
    password: '',
    securePin: ''
  };

  constructor(private authService: AuthService) {}

  validateAndRegister(): void {
    
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
      },
      error: (error) => {
        console.error('Erreur lors de linscription', error);
      }
    });
  }
}