import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/features/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/features/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
];
