import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { ArticlesService } from '../infrastructure/articles.service';
import { ArticlesActions } from './articles.actions';
import { ArticlesEffects } from './articles.effects';

describe('ArticlesEffects', () => {
  let actions: Observable<Action>;
  let effects: ArticlesEffects;
  const articleServiceMock = {
    getArticles: jest.fn(),
    createArticle: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticlesEffects,
        provideMockActions(() => actions),
        { provide: ArticlesService, useValue: articleServiceMock },
      ],
    });
    effects = TestBed.inject(ArticlesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      articleServiceMock.getArticles.mockReturnValue(of([]));
      actions = hot('-a-|', { a: ArticlesActions.loadArticles() });
      const expected = hot('-a-|', {
        a: ArticlesActions.articlesLoadedSuccess({ articles: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
