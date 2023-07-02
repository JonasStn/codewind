import { Test } from '@nestjs/testing';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RepositoryService],
    }).compile();

    service = module.get(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
