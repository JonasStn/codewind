import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleDTO } from '@shared-interfaces';

export const ArticlesActions = createActionGroup({
  source: 'Articles',
  events: {
    loadArticles: emptyProps(),
    articlesLoadedSuccess: props<{ articles: ArticleDTO[] }>(),
    articlesLoadedFailure: props<{ error: string }>(),
    createArticle: props<{ article: ArticleDTO }>(),
    articlesCreatedFailure: props<{ error: string }>(),
  },
});
