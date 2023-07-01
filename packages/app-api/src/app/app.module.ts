import { ArticlesApiModule } from '@articles-api';
import { Module } from '@nestjs/common';

@Module({
  imports: [ArticlesApiModule],
})
export class AppModule {}
