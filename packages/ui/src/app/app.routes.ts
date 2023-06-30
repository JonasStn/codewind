import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ui-articles',
    loadChildren: () => import('ui-articles').then((m) => m.uiArticlesRoutes),
  },
];
