import { AuthService } from './../../services/auth.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { identity, single } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly Route = inject(ActivatedRoute);

  private http = inject(HttpClient);
  private authService = inject(AuthService);

  //***********************************************************************************************************//

  loginForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { identifier, password } = this.loginForm.getRawValue();

    if (identifier !== 'admin@kliniksync.com' || password !== 'Test@123') {
      console.log('Wrong credentials');
      return;
    }
    const loginPayload = { identifier, password };
    this.authService.login(loginPayload).subscribe({
      next: (res) => {
        console.log('Login successful', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log('Login failed', err);
      },
      complete: () => {
        console.log('Login request completed');
      },
    });
  }
}
