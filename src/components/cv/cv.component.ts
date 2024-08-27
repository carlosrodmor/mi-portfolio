import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CVComponent {
  faArrowLeft = faArrowLeft;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
