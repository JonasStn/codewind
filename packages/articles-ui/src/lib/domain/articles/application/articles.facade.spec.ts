import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom } from 'rxjs';
import * as ArticlesSelectors from '../+state/articles.selectors';
import { ArticlesFacade } from './articles.facade';

describe('ArticlesFacade', () => {
  let facade: ArticlesFacade;
  let store: MockStore;

  describe('used in NgModule', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ArticlesFacade, provideMockStore()],
      });
      facade = TestBed.inject(ArticlesFacade);
      store = TestBed.inject(MockStore);
    });
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should return all articles', async () => {
    const articles = [{ title: 'title-1' }];
    store.overrideSelector(ArticlesSelectors.selectAllArticles, articles);
    const result = await firstValueFrom(facade.allArticles$);
    expect(result).toEqual(articles);
  });
});
