import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post<any>('http://localhost:3000/logins', this.loginForm.value)
        .subscribe(
          response => {
            console.log('Login details added successfully', response);
            alert('Login details added successfully!');
            this.loginForm.reset();
          },
          error => {
            console.error('Error adding login details', error);
            alert('An error occurred while adding login details.');
          }
        );
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Getter for easier access in template without null checks
  get loginFormControls() {
    return this.loginForm.controls;
  }
}
