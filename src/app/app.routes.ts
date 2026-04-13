import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login/login.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import path from 'path';
import { HomeComponent } from './features/home/home/home.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        redirectTo: 'login',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
    ],
  },
];
