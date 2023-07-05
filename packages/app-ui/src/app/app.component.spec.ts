import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let testUnit: AppComponent;

  beforeEach(() => {
    testUnit = new AppComponent();
  });

  it('should create the app', () => {
    expect(testUnit).toBeTruthy();
  });
});
