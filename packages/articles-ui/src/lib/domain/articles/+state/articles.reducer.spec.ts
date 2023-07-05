import { Action } from '@ngrx/store';

import { ArticleDTO } from '@shared-interfaces';
import { ArticlesActions } from './articles.actions';
import {
  ArticlesState,
  articlesReducer,
  initialArticlesState,
} from './articles.reducer';

describe('Articles Reducer', () => {
  const createArticlesEntity = (id: string, name = ''): ArticleDTO => ({
    id,
    title: name || `name-${id}`,
  });

  describe('valid Articles actions', () => {
    it('loadArticlesSuccess should return the list of known Articles', () => {
      const articles = [
        createArticlesEntity('PRODUCT-AAA'),
        createArticlesEntity('PRODUCT-zzz'),
      ];
      const action = ArticlesActions.articlesLoadedSuccess({ articles });
      const result: ArticlesState = articlesReducer(
        initialArticlesState,
        action
      );
      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;
      const result = articlesReducer(initialArticlesState, action);
      expect(result).toBe(initialArticlesState);
    });
  });
});
