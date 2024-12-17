import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss'],
})
export class FeaturedProjectComponent {
  featuredProject = {
    title: 'OPPO Community Spain',
    description:
      'Official OPPO Spain community platform. A digital space where users can share experiences, solve doubts and participate in exclusive events.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    url: 'https://community.oppomobile.es/',
  };
}
