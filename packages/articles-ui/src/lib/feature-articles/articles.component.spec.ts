import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let testUnit: ArticlesComponent;

  beforeEach(() => {
    testUnit = new ArticlesComponent();
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
