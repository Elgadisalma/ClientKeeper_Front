import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { TransactionHistoryComponent } from '../../components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from '../../components/transactions/transaction-create/transaction-create.component';
import { TransactionListComponent } from '../../components/transactions/transaction-list/transaction-list.component';


const routes: Routes = [
  { path: 'history', component: TransactionHistoryComponent },
  { path: 'create', component: TransactionCreateComponent },
  { path: 'profile', component: TransactionHistoryComponent },
  { path: '', component: TransactionListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
