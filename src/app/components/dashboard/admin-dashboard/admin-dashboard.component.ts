import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users/user.service';  
import { User } from '../../../models/user'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  standalone: false
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];

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

  approveUser(user: User) {
    if (!user.numeroCompte || user.numeroCompte.trim() === '' || user.numeroCompte.trim() === 'F1') {
      alert("Veiullez ajouter le numéro de compte !");
      return;
    }

    this.userService.approveUser(user.id, user.numeroCompte)
      .subscribe({
        next: () => {
          alert("Utilisateur approuvé avec succès !");
          this.loadUsers();
        },
      });
  }

  deleteUser(user: User) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${user.nom} ${user.prenom} ?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          alert("Utilisateur supprimé avec succès !");
          this.loadUsers();
        },
      });
    }
  }
  
  
}