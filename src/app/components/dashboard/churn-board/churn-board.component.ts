import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user'
import { ChurnService } from '../../../services/churn-prediction/churn.service';  


@Component({
  selector: 'app-churn-board',
  standalone: false,
  templateUrl: './churn-board.component.html',
  styleUrl: './churn-board.component.css'
})

export class ChurnBoardComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = false;
  isDataLoaded: boolean = false;

  constructor(private churnService: ChurnService) {}

  ngOnInit(): void {}

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
}