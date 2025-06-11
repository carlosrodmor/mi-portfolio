import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-unified-projects',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './unified-projects.component.html',
  styleUrls: ['./unified-projects.component.scss'],
})
export class UnifiedProjectsComponent implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  ngOnInit() {
    register();
  }

  // Featured project
  featuredProject = {
    id: 'featured',
    title: 'Cocktail DB',
    description:
      'This project was created with Angular to demonstrate skills such as the use of RxJS, state management, reusable components, and other advanced features of the framework. Through this development, I was able to apply reactive programming knowledge.',
    technologies: ['Angular', 'RxJS', 'TypeScript', 'API Integration'],
    features: ['Responsive Design', 'High Performance', 'Modern UI/UX'],
    url: 'https://cocktail-db-dv.netlify.app/',
    image: 'assets/project4.png',
    stats: {
      visits: '2K+',
      features: '15+',
      support: '24/7',
    },
  };

  // Other projects
  otherProjects = [
    {
      id: 'oppo-community',
      title: 'OPPO Community Spain',
      description:
        'Official community platform for OPPO Spain. A digital space where users can share experiences, solve doubts and participate in exclusive events.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      image:
        'https://images.unsplash.com/photo-1601972602237-8c79241e468b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      url: 'https://community.oppomobile.es/',
    },
    {
      id: 'portfolio-chema',
      title: 'José M. Rodríguez Portfolio',
      description:
        'Personal portfolio of José M. Rodríguez, a prominent Asturian writer and engineer. With a successful career as a telecommunications engineer, he has dedicated much of his professional life to engineering.',
      technologies: ['Vue 3', 'JavaScript', 'CSS', 'Responsive Design'],
      image: 'assets/project0.png',
      url: 'https://carlosrodmor.github.io/portfolio-chema/',
    },
    {
      id: 'octopus-game',
      title: 'Ironhack Project',
      description:
        'My first project at Ironhack was a collaborative effort with a classmate, where we developed a platformer video game using JavaScript and the DOM.',
      technologies: ['JavaScript', 'DOM', 'Game Development', 'CSS'],
      image: 'assets/project1.png',
      url: 'https://carlosrodmor.github.io/octopus-game/',
    },
    {
      id: 'code-connect',
      title: 'Final Project Ironhack',
      description:
        'For our final project at Ironhack, I teamed up with two friends to create a full-stack web application for booking private programming lessons using the MERN stack.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: 'assets/project2.png',
      url: 'https://code-connectt.netlify.app/',
    },
  ];

  selectedProject = this.featuredProject;

  swiperParams = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  selectProject(project: any) {
    if (this.selectedProject.id !== project.id) {
      // Trigger fade out animation
      const projectCard = document.querySelector('.project-card');
      if (projectCard) {
        projectCard.classList.add('fade-out');

        setTimeout(() => {
          this.selectedProject = project;
          projectCard.classList.remove('fade-out');
        }, 200);
      } else {
        this.selectedProject = project;
      }
    }
  }

  isProjectSelected(project: any): boolean {
    return this.selectedProject.id === project.id;
  }
}
