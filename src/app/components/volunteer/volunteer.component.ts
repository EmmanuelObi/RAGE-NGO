import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface VolunteerDTO {
  firstname: string;
  lastname: string;
  email: string;
  position: string;
}
@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css',
})
export class VolunteerComponent {
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}
  apiUrl: string =
    'https://sheet.best/api/sheets/c70ddc1e-3946-43cb-bde8-b68f2ed4edd4';

  loading: boolean = false;

  response: VolunteerDTO = {
    firstname: '',
    lastname: '',
    email: '',
    position: '',
  };

  volunteerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    position: ['', Validators.required],
  });

  onSubmit() {
    const { firstname, lastname, email, position } = this.volunteerForm.value;

    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      position === ''
    ) {
      alert('Invalid inputs');
      return;
    }
    let data = {
      firstname: firstname || '',
      lastname: lastname || '',
      email: email || '',
      position: position || '',
    };

    this.sendToSheet(data);
  }

  sendToSheet(data: VolunteerDTO) {
    this.loading = true;
    this.httpClient
      .post(this.apiUrl, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe({
        next: (data) => {
          this.loading = false;
          this.volunteerForm.patchValue(this.response);
          alert('Your information has been sent.');
        },
        error: (err) => {
          this.loading = false;
          alert('An error occured.');
          console.log(err);
        },
      });
  }
}
