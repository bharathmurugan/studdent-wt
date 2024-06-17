import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students`, studentData);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/students`);
  }
}
