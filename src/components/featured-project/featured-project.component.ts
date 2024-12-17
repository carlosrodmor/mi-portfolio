import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent {
  featuredProject = {
    title: 'OPPO Community España',
    description: 'Plataforma comunitaria oficial de OPPO España. Un espacio digital donde los usuarios pueden compartir experiencias, resolver dudas y participar en eventos exclusivos.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    url: 'https://community.oppomobile.es/'
  };
} 