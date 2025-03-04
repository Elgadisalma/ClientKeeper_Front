import { Component, OnInit } from '@angular/core';
import { OffresService } from '../../../services/offres/offres.service';
import { Offre } from '../../../models/offre';

@Component({
  selector: 'app-offre-create',
  standalone: false,
  templateUrl: './offre-create.component.html',
  styleUrls: ['./offre-create.component.css']
})

export class OffreCreateComponent implements OnInit {
  offres: Offre[] = [];  // Using the imported `Offre` interface
  newOffre: Offre = { taux: 0, dateExpiration: '', description: '' };  // Using the imported `Offre` interface
  isLoading: boolean = false;

  constructor(private offresService: OffresService) {}

  ngOnInit(): void {
    this.getOffres();
  }

  getOffres(): void {
    this.isLoading = true;
    this.offresService.getOffres().subscribe({
      next: (data) => {
        this.offres = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des offres', error);
        this.isLoading = false;
      }
    });
  }

  addOffre(): void {
    if (!this.newOffre.taux || !this.newOffre.dateExpiration || !this.newOffre.description) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (!this.isDateExpirationValid(this.newOffre.dateExpiration)) {
      alert('La date d\'expiration doit être après aujourd\'hui.');
      return;
    }

    this.offresService.addOffre(this.newOffre).subscribe({
      next: (offre) => {
        this.offres.push(offre);
        this.newOffre = { taux: 0, dateExpiration: '', description: '' };
      },
      error: (error) => console.error('Erreur lors de l\'ajout de l\'offre', error)
    });
  }

  isDateExpirationValid(dateExpiration: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    return dateExpiration > today;
  }

  updateOffre(offre: Offre): void {
    this.offresService.updateOffre(offre).subscribe({
      next: (updatedOffre) => {
        const index = this.offres.findIndex(o => o.id === updatedOffre.id);
        if (index !== -1) {
          this.offres[index] = updatedOffre;
        }
      },
      error: (error) => console.error('Erreur lors de la mise à jour de l\'offre', error)
    });
  }
}