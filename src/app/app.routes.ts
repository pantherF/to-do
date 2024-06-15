import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'to-do',
    loadComponent: () =>
      import('../app/to-do/to-do-page.component').then((m) => m.ToDoPage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../app/settings/settings-page.component').then(
        (m) => m.SettingsPage,
      ),
  },
  {
    path: '',
    redirectTo: '/to-do',
    pathMatch: 'full',
  },
];
