import {
  Component,
  OnInit,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-unified-projects',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './unified-projects.component.html',
  styleUrls: ['./unified-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnifiedProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  private isTransitioning = false;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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
    // Prevenir múltiples transiciones simultáneas
    if (this.isTransitioning || this.selectedProject.id === project.id) {
      return;
    }

    this.isTransitioning = true;

    // Solo ejecutar animaciones en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const projectDisplay = document.querySelector(
        '.project-display'
      ) as HTMLElement;
      const projectCard = document.querySelector(
        '.project-card'
      ) as HTMLElement;
      const projectImage = document.querySelector(
        '.project-image'
      ) as HTMLElement;

      if (projectDisplay && projectCard) {
        // Agregar clase de transición al contenedor
        projectDisplay.classList.add('transitioning');

        // Agregar efecto shimmer temporal a la imagen
        if (projectImage) {
          projectImage.classList.add('loading');
        }

        // Aplicar transición de salida más fluida
        projectCard.classList.add('fade-out');

        // Usar múltiples requestAnimationFrame para mejor fluidez
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              // Actualizar el proyecto seleccionado
              this.selectedProject = project;

              // Forzar detección de cambios
              this.cdr.detectChanges();

              // Transición de entrada
              requestAnimationFrame(() => {
                projectCard.classList.remove('fade-out');
                projectCard.classList.add('fade-in');

                // Remover efecto de loading de la imagen
                setTimeout(() => {
                  if (projectImage) {
                    projectImage.classList.remove('loading');
                  }
                }, 100);

                // Limpiar todas las clases después de la animación
                setTimeout(() => {
                  projectCard.classList.remove('fade-in');
                  projectDisplay.classList.remove('transitioning');
                  this.isTransitioning = false;

                  // Agregar micro-interacción de confirmación
                  this.addSelectionFeedback();
                }, 400);
              });
            }, 250); // Tiempo optimizado para transición más suave
          });
        });
      } else {
        // Fallback si no encuentra elementos
        this.selectedProject = project;
        this.cdr.detectChanges();
        this.isTransitioning = false;
      }
    } else {
      // En SSR, solo cambiar el proyecto sin animaciones
      this.selectedProject = project;
      this.cdr.detectChanges();
      this.isTransitioning = false;
    }
  }

  // Efecto de feedback visual al seleccionar
  private addSelectionFeedback() {
    if (isPlatformBrowser(this.platformId)) {
      const projectCard = document.querySelector(
        '.project-card'
      ) as HTMLElement;
      if (projectCard) {
        // Pequeño efecto de "bump" para confirmar selección
        projectCard.style.transform = 'scale(1.01)';
        setTimeout(() => {
          projectCard.style.transform = '';
        }, 150);
      }
    }
  }

  // Efecto hover mejorado para navegación
  onNavItemHover(event: Event, isEntering: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;

    const navItem = event.currentTarget as HTMLElement;
    const indicator = navItem.querySelector('.nav-indicator') as HTMLElement;

    if (indicator && !navItem.classList.contains('active')) {
      if (isEntering) {
        indicator.style.opacity = '0.3';
        indicator.style.transform = 'scaleY(0.3)';
      } else {
        indicator.style.opacity = '0';
        indicator.style.transform = 'scaleY(0)';
      }
    }
  }

  // Efecto de click mejorado
  onNavItemClick(event: Event) {
    if (!isPlatformBrowser(this.platformId)) return;

    const navItem = event.currentTarget as HTMLElement;

    // Crear efecto ripple mejorado
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0, 255, 0, 0.2)';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'rippleEffect 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    const rect = navItem.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';

    navItem.style.position = 'relative';
    navItem.appendChild(ripple);

    // Limpiar el ripple después de la animación
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  isProjectSelected(project: any): boolean {
    return this.selectedProject.id === project.id;
  }

  // Método para precargar imágenes y mejorar rendimiento
  preloadImage(imageUrl: string): void {
    // Solo ejecutar en el navegador, no en SSR
    if (
      isPlatformBrowser(this.platformId) &&
      imageUrl &&
      !imageUrl.includes('unsplash')
    ) {
      const img = new Image();
      img.loading = 'eager';
      img.src = imageUrl;

      // Agregar smooth loading
      img.onload = () => {
        console.log(`✅ Imagen precargada: ${imageUrl}`);
      };
    }
  }

  // Precargar imágenes al inicializar
  ngAfterViewInit() {
    // Solo ejecutar en el navegador para evitar errores en SSR
    if (isPlatformBrowser(this.platformId)) {
      // Precargar imágenes de proyectos para transiciones más fluidas
      this.otherProjects.forEach((project) => {
        if (project.image) {
          this.preloadImage(project.image);
        }
      });

      if (this.featuredProject.image) {
        this.preloadImage(this.featuredProject.image);
      }

      // Agregar estilos de animación CSS dinámicos
      this.addDynamicStyles();

      // Optimizar rendimiento con intersection observer
      this.setupIntersectionObserver();
    }
  }

  // Agregar estilos dinámicos para efectos avanzados
  private addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleEffect {
        to {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0;
        }
      }

      .project-card {
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }

      .nav-item .nav-indicator {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    `;
    document.head.appendChild(style);
  }

  // Configurar intersection observer para animaciones lazy
  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar elementos para animaciones lazy
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => observer.observe(item));
  }
}
