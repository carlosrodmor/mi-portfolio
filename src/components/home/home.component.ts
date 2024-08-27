import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';
import { HomeFrontComponent } from '../home-front/home-front.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ScrollTopModule } from 'primeng/scrolltop'; // Import PrimeNG's ScrollTopModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FadeInOnScrollDirective,
    ScrollTopModule,
    HomeFrontComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
