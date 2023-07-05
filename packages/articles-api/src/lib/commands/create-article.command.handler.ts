import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RepositoryService } from '@shared-api-db';
import { CreateArticleCommand } from './create-article.command';

@CommandHandler(CreateArticleCommand)
export class CreateArticleCommandHandler
  implements ICommandHandler<CreateArticleCommand>
{
  constructor(private readonly repository: RepositoryService) {}

  async execute(command: CreateArticleCommand): Promise<void> {
    const { title, content } = command;
    if (!title) {
      throw new BadRequestException('Title is required');
    }
    await this.repository.article.create({
      data: { title, content },
    });
  }
}
