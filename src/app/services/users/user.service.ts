import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/clients/noAppr';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
