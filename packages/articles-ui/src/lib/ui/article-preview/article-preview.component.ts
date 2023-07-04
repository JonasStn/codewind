import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArticleDTO } from '@shared-interfaces';

@Component({
  selector: 'cw-article-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePreviewComponent {
  @Input({ required: true }) article!: ArticleDTO;
}
