import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const particlesJS: any;
declare global {
  interface Window {
    particlesConfig: any;
    particlesCvConfig: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initParticles(containerId: string, configType: string = 'default'): void {
    // Solo inicializar particles.js en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      // Esperamos a que el DOM esté completamente cargado
      window.addEventListener('DOMContentLoaded', () => {
        this.loadParticles(containerId, configType);
      });

      // Si el DOM ya está cargado, intentamos inicializar directamente
      if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
      ) {
        setTimeout(() => this.loadParticles(containerId, configType), 100);
      }
    }
  }

  private loadParticles(containerId: string, configType: string): void {
    try {
      if (typeof particlesJS !== 'undefined') {
        let config;

        switch (configType) {
          case 'cv':
            config = window.particlesCvConfig;
            break;
          case 'default':
          default:
            config = window.particlesConfig;
            break;
        }

        if (config) {
          particlesJS(containerId, config);
        } else {
          console.warn(
            `La configuración de particles.js para ${configType} no está disponible`
          );
        }
      } else {
        console.warn('particles.js no está cargado correctamente');
      }
    } catch (error) {
      console.error('Error al inicializar particles.js:', error);
    }
  }
}
