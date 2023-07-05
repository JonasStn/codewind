import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Prisma } from '@prisma/client';
import { RepositoryService } from '@shared-api-db';
import { ArticleDTO } from '@shared-interfaces';
import { GetArticlesQuery } from './get-articles.query';

@QueryHandler(GetArticlesQuery)
export class GetArticlesQueryHandler
  implements IQueryHandler<GetArticlesQuery>
{
  constructor(private readonly repository: RepositoryService) {}

  async execute(_query: GetArticlesQuery): Promise<ArticleDTO[]> {
    const data = await this.repository.article.findMany();
    return data.map(toArticleDTO);
  }
}

export const toArticleDTO = (
  entity: Prisma.ArticleGetPayload<true>
): ArticleDTO => ({
  content: entity.content || '',
  id: entity.id.toString(),
  title: entity.title,
});
