import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CVComponent implements OnInit, AfterViewInit {
  faArrowLeft = faArrowLeft;

  constructor(
    private location: Location,
    private particlesService: ParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Inicializar particles.js al cargar el componente con la configuración específica para CV
    if (isPlatformBrowser(this.platformId)) {
      this.particlesService.initParticles('particles-js', 'cv');
    }
  }

  ngAfterViewInit(): void {
    // El servicio ya maneja la verificación del entorno y el tiempo de carga
  }

  goBack(): void {
    this.location.back();
  }
}
