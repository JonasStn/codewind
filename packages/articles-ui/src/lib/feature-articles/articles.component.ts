import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { AppPageLayoutComponent } from '@shared-ui-components';
import { ArticlesFacade } from '../domain/articles';
import { ArticlePreviewComponent } from '../ui/article-preview/article-preview.component';

@Component({
  selector: 'cw-articles',
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    ArticlePreviewComponent,
    AppPageLayoutComponent,
  ],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  readonly articlesFacade = inject(ArticlesFacade);

  ngOnInit(): void {
    this.articlesFacade.init();
  }
}
