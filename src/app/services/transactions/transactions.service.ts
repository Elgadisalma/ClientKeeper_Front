import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from "../../models/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) { }


  createTransaction(transaction: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post(`${this.apiUrl}/transfer`, transaction, { headers, responseType: 'text' });
  }

  getTransactionsHistory(): Observable<Transaction[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });
  
    return this.http.get<Transaction[]>(`${this.apiUrl}/history`, { headers });
  }

  getAllTransactions(): Observable<Transaction[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });
    
  
    return this.http.get<Transaction[]>(`http://localhost:8080/api/clients/all`, { headers });
  }
  
}
