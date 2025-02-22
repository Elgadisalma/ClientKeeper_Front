import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users/user.service';  

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  standalone: false
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  approveUser(user: any) {
    console.log('Utilisateur approuvé:', user);
    // Logique pour approuver l'utilisateur
  }

  deleteUser(user: any) {
    console.log('Utilisateur supprimé:', user);
    this.users = this.users.filter(u => u.cin !== user.cin);
  }
}
