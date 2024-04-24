import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../../../../shared/components/btn-primary/btn-primary.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [BtnPrimaryComponent],
})
export class ProfileComponent {
  downloadCv() {
    window.open('assets/cv/Currículo_Guilherme_Cardozo.pdf');
  }
}
