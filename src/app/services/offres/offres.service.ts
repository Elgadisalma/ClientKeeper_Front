import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from "../../models/offre";  // Importing the interface

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

  updateOffre(offre: Offre): Observable<Offre> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.put<Offre>(`${this.apiUrl}/${offre.id}`, offre, { headers });
  }

  deleteOffre(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  associateOffreToClient(clientId: number, offreId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    const body = { clientId, offreId };
    return this.http.post('http://localhost:8080/api/clients/associate', body, { headers, responseType: 'text' });
  }
  
  
  
}
