import { Route } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { EntryComponent } from './entry/entry.component';

export const orderRoutes: Route[] = [
  {
    path: '',
    component: EntryComponent,
    children: [{ path: 'order-in', component: OrderComponent }],
  },
];
