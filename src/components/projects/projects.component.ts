import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'assets/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'assets/project2.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      image: 'assets/project3.jpg',
    },
  ];
}
