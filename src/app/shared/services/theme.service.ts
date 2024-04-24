import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;
  private iconValue = '';

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const darkThemeValue = localStorage.getItem('darkTheme');
    if (darkThemeValue) {
      this.darkTheme = JSON.parse(darkThemeValue);
      if (this.darkTheme) {
        this.enableDarkTheme();
      }
    } else {
      this.iconValue = 'ligth';
    }
  }

  toggleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
    localStorage.setItem('darkTheme', JSON.stringify(this.darkTheme));
  }

  private enableDarkTheme() {
    document.body.classList.add('dark-theme');
  }

  private disableDarkTheme() {
    document.body.classList.remove('dark-theme');
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  getThemeActive(): string {
    const darkThemeValue = localStorage.getItem('darkTheme');

    if (darkThemeValue) {
      this.darkTheme = JSON.parse(darkThemeValue);
      if (this.darkTheme) {
        this.iconValue = 'dark';
      } else {
        this.iconValue = 'ligth';
      }
    }
    return this.iconValue;
  }
}
