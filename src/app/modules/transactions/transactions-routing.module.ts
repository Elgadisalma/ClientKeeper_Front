import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { ClientGuard } from '../../guards/client.guard';
import { TransactionHistoryComponent } from '../../components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from '../../components/transactions/transaction-create/transaction-create.component';
import { ProfilComponent } from '../../components/auth/profil/profil.component';


const routes: Routes = [
  { path: 'history', component: TransactionHistoryComponent , canActivate: [AuthGuard, ClientGuard]},
  { path: 'profil', component: ProfilComponent , canActivate: [AuthGuard, ClientGuard] },
  { path: '', component: TransactionCreateComponent, canActivate: [AuthGuard, ClientGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
