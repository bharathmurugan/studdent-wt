import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:4201';

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  addVisitor(visitorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, visitorData);
  }

  viewVisitors(queryParams: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/view`, { params: queryParams });
  }

  updateVisitor(visitorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, visitorData);
  }

  deleteVisitor(visitorId: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete`, { idc: visitorId });
  }
}
