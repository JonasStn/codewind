import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ENVIRONMENT } from '@shared-ui-tokens';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;
  const httpMock = {
    get: jest.fn(),
    post: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: ENVIRONMENT, useValue: { apiUrl: '' } },
      ],
    });
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
