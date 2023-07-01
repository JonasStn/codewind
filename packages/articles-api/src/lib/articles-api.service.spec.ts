import { Test } from '@nestjs/testing';
import { ArticlesApiService } from './articles-api.service';

describe('ArticlesApiService', () => {
  let service: ArticlesApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ArticlesApiService],
    }).compile();

    service = module.get(ArticlesApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
