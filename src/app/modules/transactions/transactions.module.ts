import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from '../../components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from '../../components/transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from '../../components/transactions/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionCreateComponent,
    TransactionListComponent,
  ],
  imports: [CommonModule],
})
export class TransactionsModule {}
