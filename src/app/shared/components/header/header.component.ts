// Angular
import { Component } from '@angular/core';

// Services
import { ThemeService } from './../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public iconTheme: string = '';

  constructor(private themeService: ThemeService) {
    this.iconTheme = this.themeService.getThemeActive();
  }

  togle() {
    this.themeService.toggleDarkTheme();
    this.iconTheme = this.themeService.getThemeActive();
  }
}
