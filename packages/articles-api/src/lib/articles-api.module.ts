import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ArticlesApiController } from './articles-api.controller';
import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';

@Module({
  imports: [CqrsModule],
  controllers: [ArticlesApiController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class ArticlesApiModule {}
