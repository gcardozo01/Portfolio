import { Component, DoCheck } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements DoCheck {
  public iconTheme: string = '';

  constructor(private themeService: ThemeService) {
    this.iconTheme = this.themeService.getThemeActive();
  }

  ngDoCheck(): void {
    this.iconTheme = this.themeService.getThemeActive();
  }
}
