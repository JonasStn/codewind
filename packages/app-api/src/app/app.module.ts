import { ArticlesApiModule } from '@articles-api';
import { Module } from '@nestjs/common';
import { SharedApiRepositoryModule } from '@shared-api-db';

@Module({
  imports: [SharedApiRepositoryModule, ArticlesApiModule],
})
export class AppModule {}
