import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {}

  projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: 'assets/project1.png',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: 'assets/project2.png',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: 'assets/project3.png',
    },
  ];
}
