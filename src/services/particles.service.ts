import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const particlesJS: any;
declare global {
  interface Window {
    particlesConfig: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initParticles(containerId: string): void {
    // Solo inicializar particles.js en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      // Esperamos a que el DOM esté completamente cargado
      window.addEventListener('DOMContentLoaded', () => {
        this.loadParticles(containerId);
      });

      // Si el DOM ya está cargado, intentamos inicializar directamente
      if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
      ) {
        setTimeout(() => this.loadParticles(containerId), 100);
      }
    }
  }

  private loadParticles(containerId: string): void {
    try {
      if (typeof particlesJS !== 'undefined') {
        if (window.particlesConfig) {
          particlesJS(containerId, window.particlesConfig);
        } else {
          console.warn('La configuración de particles.js no está disponible');
        }
      } else {
        console.warn('particles.js no está cargado correctamente');
      }
    } catch (error) {
      console.error('Error al inicializar particles.js:', error);
    }
  }
}
