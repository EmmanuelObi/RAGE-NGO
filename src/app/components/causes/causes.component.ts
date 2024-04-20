import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-causes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './causes.component.html',
  styleUrl: './causes.component.css',
})
export class CausesComponent {}
