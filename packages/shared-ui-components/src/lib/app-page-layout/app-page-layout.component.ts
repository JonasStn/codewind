import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cw-app-page-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPageLayoutComponent {}
