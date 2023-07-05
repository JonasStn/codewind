import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { ArticlesService } from '../infrastructure/articles.service';
import { ArticlesActions } from './articles.actions';
import { ArticlesEffects } from './articles.effects';

describe('ArticlesEffects', () => {
  let actions: Observable<Action>;
  let effects: ArticlesEffects;
  const articleServiceMock = {
    getArticles: of({ id: 'id' }),
    createArticle: of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticlesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        { provide: ArticlesService, value: articleServiceMock },
      ],
    });
    effects = TestBed.inject(ArticlesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ArticlesActions.loadArticles() });

      const expected = hot('-a-|', {
        a: ArticlesActions.articlesLoadedSuccess({ articles: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
