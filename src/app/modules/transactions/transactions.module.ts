import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from '../../components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from '../../components/transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from '../../components/transactions/transaction-list/transaction-list.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { ClientNavbarComponent } from "../../components/shared/client-navbar/client-navbar.component";

@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionCreateComponent,
    TransactionListComponent,
    ClientNavbarComponent
  ],
  imports: [CommonModule,
            TransactionsRoutingModule,
            ],
})
export class TransactionsModule {}
