import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesFacade } from '../domain/articles';
import { ArticlesComponent } from '../feature-articles/articles.component';

describe('ArticlesComponent', () => {
  let testUnit: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  const articleFacadeMock = { createArticle: jest.fn() };

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
