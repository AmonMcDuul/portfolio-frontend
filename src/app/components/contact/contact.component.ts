import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  honeypot: string = '';
  isFormSubmitted: boolean = false;

  constructor(private emailService: EmailService) {}

  onSubmit(): void {
    if (this.honeypot) {
      console.log('Honeypot field filled, discarding submission.');
      return;
    }

    const subject = `Contact Form Submission from ${this.name}`;
    const body = `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`;

    this.emailService.sendEmail(subject, body).subscribe(
      response => {
        console.log('Email sent successfully', response);
        this.isFormSubmitted = true;
        this.clearForm();
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }

  clearForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
    this.honeypot = '';
  }
}