import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ArticlesFacade } from '../domain/articles';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let testUnit: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  const articleFacadeMock = { allArticles$: of([]) };

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [{ provide: ArticlesFacade, useValue: articleFacadeMock }],
    }).createComponent(ArticlesComponent);
    testUnit = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
