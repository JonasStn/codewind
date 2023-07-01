import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesApiService {
  getArticles() {
    return "hello I'm an article";
  }
}
