import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChurnService {
  private apiUrl = 'http://localhost:8080/api/churn/predict';

  constructor(private http: HttpClient) {}

  getChurnUsers(): Observable<User[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User[]>(this.apiUrl, { headers });
  }
}
