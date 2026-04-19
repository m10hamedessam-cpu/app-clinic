import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
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
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./pages/appointments/appointments.component').then(
            (m) => m.AppointmentsComponent,
          ),
      },
      {
        path: 'doctors',
        loadComponent: () =>
          import('./pages/doctors/doctors.component').then((m) => m.DoctorsComponent),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./pages/patients/patients.component').then((m) => m.PatientsComponent),
      },
      {
        path: 'room-allotment',
        loadComponent: () =>
          import('./pages/room-allotment/room-allotment.component').then(
            (m) => m.RoomAllotmentComponent,
          ),
      },
    ],
  },
];
