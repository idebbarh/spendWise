import { Routes } from '@angular/router';

export const ADMIN_WORKSPACE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },

  {
    path: 'statistics',
    loadComponent: () =>
      import('./features/statistics/statistics.component').then(
        (m) => m.StatisticsComponent,
      ),
  },

  {
    path: 'accounts',
    loadComponent: () =>
      import('./features/accounts/accounts.component').then(
        (m) => m.AccountsComponent,
      ),
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then(
        (m) => m.CategoriesComponent,
      ),
  },

  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(
        (m) => m.TransactionsComponent,
      ),
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings.component').then(
        (m) => m.SettingsComponent,
      ),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
