import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () =>
      import('@cake-bake-ang/dashboard').then((m) => m.dashboardRoutes),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('@cake-bake-ang/order').then((m) => m.orderRoutes),
  },
];
