import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cw-app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  menuOpen = false;
}
