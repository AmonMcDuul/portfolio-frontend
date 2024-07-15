import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  onSubmit(): void {
    const subject = `Portfolio contact: ${this.name}`;
    const body = `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`;

    this.emailService.sendEmail(subject, body).subscribe(
      response => {
        console.log('Email sent successfully', response);
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }
}