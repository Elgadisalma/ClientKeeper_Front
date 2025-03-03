import { Component, OnInit } from '@angular/core';
import { OffresService } from '../../../services/offres/offres.service';
import { Offre } from '../../../models/offre';


@Component({
  selector: 'app-offre-create',
  standalone: false,
  templateUrl: './offre-create.component.html',
  styleUrl: './offre-create.component.css'
})
export class OffreCreateComponent implements OnInit {
  offres: Offre[] = [];
  newOffre: Offre = { taux: 0, dateExpiration: '', description: '' };
  isLoading: boolean = false;

  constructor(private offresService: OffresService) {}

  ngOnInit(): void {
    this.getOffres();
  }

  getOffres(): void {
    this.isLoading = true;
    this.offresService.getOffres().subscribe(
      (data) => {
        this.offres = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
        this.isLoading = false;
      }
    );
  }

  addOffre(): void {
    if (!this.newOffre.taux || !this.newOffre.dateExpiration || !this.newOffre.description) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.offresService.addOffre(this.newOffre).subscribe(
      (offre) => {
        this.offres.push(offre);
        this.newOffre = { taux: 0, dateExpiration: '', description: '' };
      },
      (error) => console.error('Erreur lors de l\'ajout de l\'offre', error)
    );
  }
}