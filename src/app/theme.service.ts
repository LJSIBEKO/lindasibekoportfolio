import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'dark';

  constructor() {
    this.setTheme('dark');
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.body.className = `theme-${theme}`;
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}