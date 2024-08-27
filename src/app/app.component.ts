import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, CommonModule],
})
export class AppComponent {
  showNavbarFooter: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute() {
    const currentRoute = this.router.url;
    // Añade aquí las rutas en las que no quieres mostrar la navbar y el footer
    const excludedRoutes = ['/cv'];
    this.showNavbarFooter = !excludedRoutes.includes(currentRoute);
  }
}
