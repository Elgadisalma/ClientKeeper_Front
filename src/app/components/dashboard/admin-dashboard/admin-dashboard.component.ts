import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  users = [
    {
      nom: 'Test',
      prenom: 'Receiver',
      cin: '123',
      dateNaissance: '1990-05-15',
      adresse: '123 Rue Principale, Paris, France',
      profession: 'Ingénieur logiciel',
      sexe: 'HOMME',
    },
    {
      nom: 'Doe',
      prenom: 'John',
      cin: '456',
      dateNaissance: '1985-08-22',
      adresse: '456 Avenue Centrale, Lyon, France',
      profession: 'Médecin',
      sexe: 'HOMME',
    },
    {
      nom: 'Doe',
      prenom: 'John',
      cin: '456',
      dateNaissance: '1985-08-22',
      adresse: '456 Avenue Centrale, Lyon, France',
      profession: 'Médecin',
      sexe: 'HOMME',
    },
    {
      nom: 'Doe',
      prenom: 'John',
      cin: '456',
      dateNaissance: '1985-08-22',
      adresse: '456 Avenue Centrale, Lyon, France',
      profession: 'Médecin',
      sexe: 'HOMME',
    },
    {
      nom: 'Doe',
      prenom: 'John',
      cin: '456',
      dateNaissance: '1985-08-22',
      adresse: '456 Avenue Centrale, Lyon, France',
      profession: 'Médecin',
      sexe: 'HOMME',
    },
    {
      nom: 'Doe',
      prenom: 'John',
      cin: '456',
      dateNaissance: '1985-08-22',
      adresse: '456 Avenue Centrale, Lyon, France',
      profession: 'Médecin',
      sexe: 'HOMME',
    },
  ];

  approveUser(user: any) {
    console.log('Utilisateur approuvé:', user);
    // Logique pour approuver l'utilisateur
  }

  deleteUser(user: any) {
    console.log('Utilisateur supprimé:', user);
    this.users = this.users.filter(u => u.cin !== user.cin);
  }
}
