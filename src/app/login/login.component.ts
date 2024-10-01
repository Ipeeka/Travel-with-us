import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent , RouterLink  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signupUsers: any[] = [];
  signupObj:any = {
    username: '',
    password: ''
  };



  

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    // Add login logic here
    console.log('Login submitted');
  }
}
