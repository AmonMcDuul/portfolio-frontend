import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(): void {
    console.log('Form submitted:', this.name, this.email, this.message);
  }
}