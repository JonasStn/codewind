import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ArticleDTO } from '@shared-interfaces';
import { ENVIRONMENT } from '@shared-ui-tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = inject(ENVIRONMENT).apiUrl;

  getArticles(): Observable<ArticleDTO[]> {
    return this.httpClient.get<ArticleDTO[]>(`${this.apiUrl}/articles`);
  }

  createArticle(article: ArticleDTO): Observable<void> {
    return this.httpClient.post<void>(`${this.apiUrl}/articles`, article);
  }
}
