import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  login(payload: { identifier: string; password: string }): Observable<any> {
    return this.http.post('https://api.kliniksync.com/api/v1/auth/login', payload);
  }
}
