import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.navigate(['/about']);
    this.route.navigate(['/home']);
  }
}
