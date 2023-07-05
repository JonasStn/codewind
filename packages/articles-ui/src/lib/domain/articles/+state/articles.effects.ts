import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { ArticlesService } from '../infrastructure/articles.service';
import { ArticlesActions } from './articles.actions';

@Injectable()
export class ArticlesEffects {
  private actions$ = inject(Actions);
  private articlesService = inject(ArticlesService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadArticles),
      exhaustMap(() => this.articlesService.getArticles()),
      map((articles) => ArticlesActions.articlesLoadedSuccess({ articles })),
      catchError((error) => {
        console.error('Error', error);
        return of(ArticlesActions.articlesLoadedFailure({ error }));
      })
    )
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.createArticle),
      exhaustMap(({ article }) => this.articlesService.createArticle(article)),
      tap(() => alert('Article created successfully')),
      map(() => ArticlesActions.loadArticles),
      catchError((error) => {
        console.error('Error', error);
        alert('Article creation failed');
        return of(ArticlesActions.articlesCreatedFailure({ error }));
      })
    )
  );
}
