import { Module } from '@nestjs/common';
import { ArticlesApiController } from './articles-api.controller';
import { ArticlesApiService } from './articles-api.service';

@Module({
  controllers: [ArticlesApiController],
  providers: [ArticlesApiService],
  exports: [ArticlesApiService],
})
export class ArticlesApiModule {}
