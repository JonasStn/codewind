import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ArticlesFacade } from '../domain/articles';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let testUnit: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [ArticlesFacade, provideMockStore()],
    }).createComponent(ArticlesComponent);
    testUnit = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
