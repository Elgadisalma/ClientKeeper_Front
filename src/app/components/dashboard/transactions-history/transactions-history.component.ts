import { Component } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-transactions-history',
  standalone: false,
  templateUrl: './transactions-history.component.html',
  styleUrl: './transactions-history.component.css'
})

export class TransactionsHistoryComponent {
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionsService.getAllTransactions().subscribe({
      next: (data) => {
        console.log("Transactions reçues :", data); // DEBUG
        this.transactions = [...data];
      },
      error: (error) => {
        console.error("Erreur lors du chargement des transactions :", error);
      }
    });
}

}