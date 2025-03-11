import { Component, OnInit } from '@angular/core';
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
  isSecurePinModalOpen = false;
  securePin: string = '';
  transactionError: string | null = null;
  transactionStatus: 'success' | 'failed' | null = null;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionsService,
  ) {
    this.transactionForm = this.fb.group({
      receiverName: ['', Validators.required],
      receiverPrenom: ['', Validators.required],
      receiverAccountNumber: ['', Validators.required],
      montant: [null, [Validators.required, Validators.min(1)]],
      motif: ['', Validators.required]
    });
  }

  openSecurePinModal() {
    if (this.transactionForm.valid) {
      this.isSecurePinModalOpen = true;
      this.transactionError = null;
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  }

  confirmTransaction() {
    if (this.securePin.length < 4) {
      this.transactionError = "Le Secure PIN doit contenir au minimum 4 chiffres";
      return;
    }

    const transactionData = {
      ...this.transactionForm.value,
      securePin: this.securePin
    };

    this.transactionService.createTransaction(transactionData).subscribe({
      next: response => {
        this.transactionStatus = 'success';  
        setTimeout(() => {
          this.transactionStatus = null; 
        }, 4000);
        this.transactionForm.reset();
        this.isSecurePinModalOpen = false;
      },
      error: error => {
        this.transactionStatus = 'failed';  
        setTimeout(() => {
          this.transactionStatus = null; 
        }, 3000);
      }
    });
  }
}
