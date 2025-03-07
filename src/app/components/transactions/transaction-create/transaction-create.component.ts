import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '../../../services/transactions/transactions.service';  

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css'],
  standalone: false
})
export class TransactionCreateComponent {
  
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionsService) {
    this.transactionForm = this.fb.group({
      receiverName: ['', Validators.required],
      receiverPrenom: ['', Validators.required],
      receiverAccountNumber: ['', Validators.required],
      montant: [null, [Validators.required, Validators.min(1)]],
      motif: ['', Validators.required],
      securePin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  createTransaction() {
    if (this.transactionForm.valid) {
      this.transactionService.createTransaction(this.transactionForm.value).subscribe({
        next: response => {
          console.log('Transaction réussie', response);
          alert("Transaction effectuée avec succès !");
          this.transactionForm.reset();
        },
        error: error => {
          console.error('Erreur lors de la transaction', error);
          alert("Erreur lors de la transaction. Veuillez réessayer.");
        }
      });
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  }
}
