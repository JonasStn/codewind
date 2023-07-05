import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticlesEffects } from './domain/articles/+state/articles.effects';
import * as fromArticles from './domain/articles/+state/articles.reducer';
import { ArticlesFacade } from './domain/articles/application/articles.facade';
import { ArticlesCreateComponent } from './feature-articles-create/articles-create.component';
import { ArticlesComponent } from './feature-articles/articles.component';

const providers = [
  ArticlesFacade,
  provideState(fromArticles.ARTICLES_FEATURE_KEY, fromArticles.articlesReducer),
  provideEffects(ArticlesEffects),
];

export const uiArticlesRoutes: Route[] = [
  {
    path: '',
    providers,
    children: [
      {
        path: '',
        component: ArticlesComponent,
      },
      {
        path: 'create',
        component: ArticlesCreateComponent,
      },
    ],
  },
];
