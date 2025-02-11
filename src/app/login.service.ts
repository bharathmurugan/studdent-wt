import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/logins';

  constructor(private http: HttpClient) {}

  submitLogin(loginData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
