import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface DonateDTO {
  firstname: string;
  lastname: string;
  email: string;
  inquiry: string;
}
@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css',
})
export class DonateComponent {
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}
  apiUrl: string =
    'https://sheet.best/api/sheets/20e87aff-fa4a-40bd-b32b-b38738a7cd96';

  loading: boolean = false;

  response: DonateDTO = {
    firstname: '',
    lastname: '',
    email: '',
    inquiry: '',
  };

  donateForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    inquiry: ['', Validators.required],
  });

  onSubmit() {
    const { firstname, lastname, email, inquiry } = this.donateForm.value;

    if (firstname === '' || lastname === '' || email === '' || inquiry === '') {
      alert('Invalid inputs');
      return;
    }

    let data = {
      firstname: firstname || '',
      lastname: lastname || '',
      email: email || '',
      inquiry: inquiry || '',
    };

    this.sendToSheet(data);
  }

  sendToSheet(data: DonateDTO) {
    this.loading = true;
    this.httpClient
      .post(this.apiUrl, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.loading = false;
          this.donateForm.patchValue(this.response);
          alert('Your inquiry has been sent.');
        },
        error: (err) => {
          this.loading = false;
          alert('An error occured.');
          console.log(err);
        },
      });
  }
}
