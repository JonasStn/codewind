import { ArticlesCreateComponent } from './articles-create.component';

describe('ArticlesComponent', () => {
  let testUnit: ArticlesCreateComponent;

  beforeEach(() => {
    testUnit = new ArticlesCreateComponent();
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
