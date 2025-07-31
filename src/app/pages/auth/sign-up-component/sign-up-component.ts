import { InMemoryDataService } from '@/src/app/services/in-memory-data.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { randomUUID } from 'crypto';

@Component({
  selector: 'app-sign-up-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-up-component.html',
  styleUrl: './sign-up-component.css',
})
export class SignUpComponent {
  constructor(private dataService: InMemoryDataService) {}

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fname: string = '';
  lname: string = '';

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.dataService.addUser({
      id: randomUUID(),
      name: this.fname + '' + this.lname,
      email: this.email,
      password: this.password,
    });
    alert('Sign-up successful!');
  }
}
