import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleDTO } from '@shared-interfaces';
import {
  AppPageLayoutComponent,
  FormsInputComponent,
  FormsTextareaComponent,
} from '@shared-ui-components';
import { ArticlesFacade } from '../domain/articles';

@Component({
  selector: 'cw-articles-create',
  standalone: true,
  imports: [
    CommonModule,
    AppPageLayoutComponent,
    FormsInputComponent,
    FormsTextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './articles-create.component.html',
})
export class ArticlesCreateComponent {
  articlesFacade = inject(ArticlesFacade);
  fb = inject(NonNullableFormBuilder);

  articleForm = this.fb.group({
    title: ['', Validators.required],
    content: [''],
  });

  onSubmit() {
    if (this.articleForm.valid) {
      const article = this.articleForm.value as ArticleDTO;
      this.articlesFacade.createArticle(article);
    }
  }
}
