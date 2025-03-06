import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  standalone: false,
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
  showBalance = false;

  toggleBalance() {
    this.showBalance = !this.showBalance;
  }
}
