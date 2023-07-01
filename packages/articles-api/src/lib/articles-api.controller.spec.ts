import { Test } from '@nestjs/testing';
import { ArticlesApiController } from './articles-api.controller';
import { ArticlesApiService } from './articles-api.service';

describe('ArticlesApiController', () => {
  let controller: ArticlesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ArticlesApiService],
      controllers: [ArticlesApiController],
    }).compile();

    controller = module.get(ArticlesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
