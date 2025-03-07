import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = 'http://localhost:8080/api/transactions/transfer';

  constructor(private http: HttpClient) { }


  createTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }}
