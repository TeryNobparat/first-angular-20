import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in-component',
  imports: [RouterLink],
  templateUrl: './sign-in-component.html',
  styleUrl: './sign-in-component.css',
})
export class SignInComponent {
  email: string = '';
  password: string = '';
}
