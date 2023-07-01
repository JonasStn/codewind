import { Controller } from '@nestjs/common';
import { ArticlesApiService } from './articles-api.service';

@Controller('articles')
export class ArticlesApiController {
  constructor(private articlesApiService: ArticlesApiService) {}
}
