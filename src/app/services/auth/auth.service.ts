import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../../models/user';
import { tap, catchError } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return throwError(() => new Error(error.message || 'Registration failed.'));
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap(async response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', response.email);
          localStorage.setItem('role', response.role);
  
          const userData = await this.fetchCurrentUser().toPromise();
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
          }
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.message || 'Login failed.'));
      })
    );
  }
  
  fetchCurrentUser(): Observable<User | null> {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
  
    if (!token || !email) return throwError(() => new Error('No token or email found'));
  
    return this.http.get<User>(`http://localhost:8080/api/clients/get/${email}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      catchError(error => {
        console.error('Error fetching user details:', error);
        return throwError(() => new Error(error.message || 'Failed to fetch user.'));
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  }
}
