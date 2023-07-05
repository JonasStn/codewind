import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ArticleDTO } from '@shared-interfaces';
import { ArticlesActions } from './articles.actions';

export const ARTICLES_FEATURE_KEY = 'articles';

export interface ArticlesState extends EntityState<ArticleDTO> {
  selectedId?: string | number; // which Articles record has been selected
  loaded: boolean; // has the Articles list been loaded
  error?: string | null; // last known error (if any)
}

export interface ArticlesPartialState {
  readonly [ARTICLES_FEATURE_KEY]: ArticlesState;
}

export const articlesAdapter: EntityAdapter<ArticleDTO> =
  createEntityAdapter<ArticleDTO>();

export const initialArticlesState: ArticlesState =
  articlesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialArticlesState,
  on(ArticlesActions.loadArticles, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ArticlesActions.articlesLoadedSuccess, (state, { articles }) =>
    articlesAdapter.setAll(articles, { ...state, loaded: true })
  ),
  on(ArticlesActions.articlesLoadedFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function articlesReducer(
  state: ArticlesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
