import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendEmail(subject: string, body: string): Observable<any> {
    const url = `${this.apiUrl}/Email/send`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const emailRequest = { subject, body };

    return this.http.post<any>(url, emailRequest, { headers });
  }
}
