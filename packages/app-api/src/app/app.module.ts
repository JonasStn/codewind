import { ArticlesApiModule } from '@articles-api';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomConfigModule } from './config/config.module';

@Module({
  imports: [CustomConfigModule, ArticlesApiModule],
})
export class AppModule {
  constructor(configService: ConfigService) {
    console.log(configService.get('databaseUrl'));
  }
}
