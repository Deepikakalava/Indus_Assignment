import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: any = {};
  constructor(private http: HttpClient) {}

  submitForm() {
    console.log('Form data:', this.user); // Log the data being sent
    this.http.post('http://localhost:3000/submit-form', this.user)
        .subscribe(
            response => console.log('Server response:', response),
            error => console.error('Error:', error)
        );
       
}

}

