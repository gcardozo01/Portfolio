// Angular
import { Component, signal } from '@angular/core';

// Interfaces
import { ISocialMedia } from '../../interfaces/ISocialMedia';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  public socialMedia = signal<ISocialMedia[]>([
    {
      name: 'gmail',
      link: 'mailto:guilhermecardozo91@gmail.com?subject=&body=',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/guilherme-cardozo-73322525a/',
    },
    {
      name: 'github',
      link: 'https://github.com/gcardozo01',
    },
  ]);

  redirectSocialMedia(link: string) {
    window.open(link);
  }
}
