import { Component } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';  
import { Transaction } from '../../../models/transaction'

@Component({
  selector: 'app-transaction-history',
  standalone: false,
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})

export class TransactionHistoryComponent {
  groupedTransactions: { [date: string]: Transaction[] } = {}; 
  transactionDates: string[] = [];

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactionsHistory().subscribe(
      (data) => {
        if (data && typeof data === 'object') {
          const transactionsArray: Transaction[] = Object.entries(data).flatMap(([date, transactions]) => 
            Array.isArray(transactions) ? 
              transactions.map(transaction => ({ 
                ...transaction, 
                dateTransaction: date // Ajouter la date extraite
              })) 
              : []
          );
  
          // Grouper par date
          this.groupedTransactions = this.groupByDate(transactionsArray);
          this.transactionDates = Object.keys(this.groupedTransactions).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des transactions', error);
      }
    );
  }
  

  private groupByDate(transactions: Transaction[]): { [date: string]: Transaction[] } {
    return transactions.reduce((acc: { [date: string]: Transaction[] }, transaction) => {
      const date = transaction.dateTransaction.split('T')[0]; // Extraction de la date seulement
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {});
  }
  
}