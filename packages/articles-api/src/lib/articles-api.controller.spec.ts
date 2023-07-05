import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { ArticlesApiController } from './articles-api.controller';

describe('ArticlesApiController', () => {
  let controller: ArticlesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommandBus, QueryBus],
      controllers: [ArticlesApiController],
    }).compile();

    controller = module.get(ArticlesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
