import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective, SocialLinksComponent],
  templateUrl: './home-front.component.html',
  styleUrls: ['./home-front.component.scss'],
})
export class HomeFrontComponent implements OnInit, AfterViewInit {
  constructor(
    private particlesService: ParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Inicialización temprana es manejada por el servicio
    if (isPlatformBrowser(this.platformId)) {
      this.particlesService.initParticles('particles-js');
    }
  }

  ngAfterViewInit(): void {
    // El servicio ya maneja la verificación del entorno y el tiempo de carga
  }
}
