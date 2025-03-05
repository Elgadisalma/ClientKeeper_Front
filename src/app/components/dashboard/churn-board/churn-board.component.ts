import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user'
import { Offre } from '../../../models/offre'
import { ChurnService } from '../../../services/churn-prediction/churn.service';  
import { OffresService } from '../../../services/offres/offres.service';  


@Component({
  selector: 'app-churn-board',
  standalone: false,
  templateUrl: './churn-board.component.html',
  styleUrl: './churn-board.component.css'
})

export class ChurnBoardComponent implements OnInit {
  users: User[] = [];
  offres: Offre[] = [];
  isLoading: boolean = false;
  isDataLoaded: boolean = false;
  selectedOffre: { [key: number]: number } = {};

  constructor(private churnService: ChurnService, private offresService: OffresService) {}

  ngOnInit(): void {
    this.loadOffres();
  }
  generateChurnUsers(): void {
    this.isLoading = true;
    
    this.churnService.getChurnUsers().subscribe(
      (data) => {
        this.users = data;
        this.isLoading = false;
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        this.isLoading = false;
      }
    );
  }

  loadOffres(): void {
    this.offresService.getOffres().subscribe(
      (data) => {
        this.offres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
      }
    );
  }

  associerOffre(clientId: number, offreId: number | undefined): void {
    if (!offreId) {
      alert("Veuillez sélectionner une offre avant d'associer.");
      return;
    }
  
    this.offresService.associateOffreToClient(clientId, offreId).subscribe(
      (response) => {
        console.log("Offre associée avec succès", response);
        alert("Offre associée avec succès !");
      },
      (error) => {
        console.error("Erreur lors de l'association de l'offre", error);
        alert("Une erreur s'est produite lors de l'association de l'offre.");
      }
    );
  }
  
}