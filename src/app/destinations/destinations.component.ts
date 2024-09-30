import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Add login logic here
    console.log('Login submitted');
  }

  navigateToContact() {
    this.router.navigate(['/contactus']);
  }

}
