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

  // Proyecto destacado principal
  featuredProject = {
    id: 'featured',
    title: 'OPPO Community Spain',
    description:
      'Plataforma oficial de la comunidad OPPO España. Un espacio digital donde los usuarios pueden compartir experiencias, resolver dudas y participar en eventos exclusivos.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    features: ['Diseño Responsivo', 'Alto Rendimiento', 'UI/UX Moderna'],
    url: 'https://community.oppomobile.es/',
    image: 'assets/project0.png',
    stats: {
      visits: '1K+',
      features: '20+',
      support: '24/7',
    },
  };

  // Otros proyectos
  otherProjects = [
    {
      id: 'cocktail-db',
      title: 'Cocktail DB',
      description:
        'Aplicación Angular que demuestra habilidades como el uso de RxJS, gestión de estado, componentes reutilizables y otras características avanzadas del framework.',
      technologies: ['Angular', 'RxJS', 'TypeScript', 'API Integration'],
      image: 'assets/project4.png',
      url: 'https://cocktail-db-dv.netlify.app/',
    },
    {
      id: 'portfolio-chema',
      title: 'José M. Rodríguez Portfolio',
      description:
        'Portfolio personal de José M. Rodríguez, prominente escritor e ingeniero asturiano con una carrera exitosa en telecomunicaciones y literatura.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'assets/project0.png',
      url: 'https://carlosrodmor.github.io/portfolio-chema/',
    },
    {
      id: 'octopus-game',
      title: 'Ironhack Project',
      description:
        'Mi primer proyecto en Ironhack: un videojuego de plataformas desarrollado con JavaScript y DOM, enfocado en mecánicas de juego y elementos interactivos.',
      technologies: ['JavaScript', 'DOM', 'Game Development', 'CSS'],
      image: 'assets/project1.png',
      url: 'https://carlosrodmor.github.io/octopus-game/',
    },
    {
      id: 'code-connect',
      title: 'Final Project Ironhack',
      description:
        'Aplicación web full-stack para reservar clases privadas de programación, desarrollada con el stack MERN.',
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
