import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'articles',
    loadChildren: () => import('@articles-ui').then((m) => m.uiArticlesRoutes),
  },
];
