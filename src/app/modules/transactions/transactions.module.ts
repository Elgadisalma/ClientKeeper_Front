import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from '../../components/transactions/transaction-history/transaction-history.component';
import { TransactionCreateComponent } from '../../components/transactions/transaction-create/transaction-create.component';
import { ProfilComponent } from '../../components/auth/profil/profil.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { ClientNavbarComponent } from "../../components/shared/client-navbar/client-navbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionCreateComponent,
    ClientNavbarComponent,
    ProfilComponent
  ],
  imports: [CommonModule,
            TransactionsRoutingModule,
            ReactiveFormsModule,
            FormsModule
  ]
})
export class TransactionsModule {}
