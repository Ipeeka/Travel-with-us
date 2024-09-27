import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginComponent , RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
