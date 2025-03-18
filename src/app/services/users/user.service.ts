import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/clients/noAppr';
  private approveUrl = 'http://localhost:8080/api/clients/approveClient'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  approveUser(userId: number, numeroCompte: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
  
    const body = JSON.stringify({ userId: userId, NumeroCompte: numeroCompte });
  
    console.log(body);
  
    return this.http.put<any>(this.approveUrl, body, { headers });
  }

  deleteUser(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  
    return this.http.delete<any>(`http://localhost:8080/api/clients/delete/${userId}`, { headers });
  }
  
}
