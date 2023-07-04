import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as ArticlesActions from './articles.actions';
import { ArticlesEffects } from './articles.effects';
import { ArticlesFacade } from './articles.facade';
import { ArticlesEntity } from './articles.models';
import {
  ARTICLES_FEATURE_KEY,
  ArticlesState,
  initialArticlesState,
  articlesReducer,
} from './articles.reducer';
import * as ArticlesSelectors from './articles.selectors';

interface TestSchema {
  articles: ArticlesState;
}

describe('ArticlesFacade', () => {
  let facade: ArticlesFacade;
  let store: Store<TestSchema>;
  const createArticlesEntity = (id: string, name = ''): ArticlesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ARTICLES_FEATURE_KEY, articlesReducer),
          EffectsModule.forFeature([ArticlesEffects]),
        ],
        providers: [ArticlesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ArticlesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allArticles$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allArticles$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadArticlesSuccess` to manually update list
     */
    it('allArticles$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allArticles$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ArticlesActions.loadArticlesSuccess({
          articles: [createArticlesEntity('AAA'), createArticlesEntity('BBB')],
        })
      );

      list = await readFirst(facade.allArticles$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
