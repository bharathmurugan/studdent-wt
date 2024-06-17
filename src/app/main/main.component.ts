import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        this.message = 'Login successful';
        this.router.navigate(['/home']);
      }, error => {
        this.message = error.error.message || 'Login failed';
      });
  }
}
