import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => this.scrollTo('home'),
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
        command: () => this.scrollTo('about'),
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-briefcase',
        command: () => this.scrollTo('projects'),
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        command: () => this.scrollTo('contact'),
      },
    ];
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
