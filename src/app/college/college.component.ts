import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  collegeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.collegeForm = this.formBuilder.group({
      collegeId: ['', Validators.required],
      collegeName: ['', Validators.required],
      studentId: ['', Validators.required],
      deptId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.collegeForm.valid) {
      this.http.post<any>('http://localhost:3000/colleges', this.collegeForm.value)
        .subscribe(
          response => {
            console.log('College added successfully', response);
            // Optionally, you can reset the form after successful submission
            this.collegeForm.reset();
          },
          error => {
            console.error('Error adding college', error);
          }
        );
    } else {
      this.markFormGroupTouched(this.collegeForm);
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
  get collegeFormControls() {
    return this.collegeForm.controls;
  }
}
