import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  private apiUrl = 'http://localhost:3000/colleges'; 

  constructor(private http: HttpClient) { }

  addCollege(college: any): Observable<any> {
    return this.http.post(this.apiUrl, college);
  }
}
