import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Offre {
  taux: number;
  dateExpiration: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private apiUrl = 'http://localhost:8080/api/offres';

  constructor(private http: HttpClient) {}

  getOffres(): Observable<Offre[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<Offre[]>(this.apiUrl, { headers });
  }
  
  addOffre(offre: Offre): Observable<Offre> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post<Offre>(this.apiUrl, offre, { headers });
  }  
}
