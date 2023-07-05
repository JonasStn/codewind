import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ArticleDTO } from '@shared-interfaces';
import { CreateArticleCommand } from './commands/create-article.command';
import { GetArticlesQuery } from './queries/get-articles.query';

@Controller('articles')
export class ArticlesApiController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  async getArticles(): Promise<ArticleDTO[]> {
    return this.queryBus.execute(new GetArticlesQuery());
  }

  @Post()
  async createArticle(@Body() article: ArticleDTO): Promise<void> {
    const { title, content } = article;
    return this.commandBus.execute(new CreateArticleCommand(title, content));
  }
}
