import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '@shared-ui-components';

@Component({
  standalone: true,
  imports: [RouterModule, AppHeaderComponent],
  selector: 'cw-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostBinding('class.dark') darkMode = true;
}
