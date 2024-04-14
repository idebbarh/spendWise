import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./brochure/brochure.routes').then((m) => m.BROCHURE_ROUTES),
  },
  {
    path: '',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'workspace',
    loadComponent: () =>
      import('./admin-workspace/admin-workspace.component').then(
        (m) => m.AdminWorkspaceComponent,
      ),
    loadChildren: () =>
      import('./admin-workspace/admin-workspace.routes').then(
        (m) => m.ADMIN_WORKSPACE_ROUTES,
      ),
  },
  { path: '**', redirectTo: '' },
];
