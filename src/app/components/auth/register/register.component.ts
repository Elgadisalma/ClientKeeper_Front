import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  validationErrors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}\d+$/)]],
      dateNaissance: ['', [Validators.required, this.validateAge]],
      sexe: ['', Validators.required],
      adresse: ['', Validators.required],
      profession: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      securePin: ['', [Validators.required, Validators.pattern(/^\d{4,8}$/)]],
    });
  }

  validateAge(control: any) {
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (age < 18 || (age === 18 && monthDiff < 0)) {
      return { invalidAge: true };
    }
    return null;
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
        window.alert('Inscription réussie ! Veuillez attendre quelques jours pour analyser vos données.');
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription', error);
        if (error.error && typeof error.error === 'object') {
          this.validationErrors = { ...this.validationErrors, ...error.error };
        } else {
          this.validationErrors['server'] = "Une erreur est survenue lors de l'inscription";
        }
      }
    });
  }
}
