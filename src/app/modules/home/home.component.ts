// Angular
import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    ProfileComponent,
    ExperiencesComponent,
    AboutComponent,
    ProjectsComponent,
    SocialMediaComponent,
    FooterComponent,
  ],
})
export class HomeComponent {}
