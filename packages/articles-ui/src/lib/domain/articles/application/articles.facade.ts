import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ArticlesActions } from '../+state/articles.actions';
import * as ArticlesSelectors from '../+state/articles.selectors';

@Injectable()
export class ArticlesFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(ArticlesSelectors.selectArticlesLoaded));
  allArticles$ = this.store.pipe(select(ArticlesSelectors.selectAllArticles));
  selectedArticles$ = this.store.pipe(select(ArticlesSelectors.selectEntity));

  init() {
    this.store.dispatch(ArticlesActions.loadArticles());
  }
}
