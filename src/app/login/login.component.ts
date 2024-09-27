import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent , RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Add login logic here
    console.log('Login submitted');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
