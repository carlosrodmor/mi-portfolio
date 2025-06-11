import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';
import { HomeFrontComponent } from '../../components/home-front/home-front.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { UnifiedProjectsComponent } from '../../components/unified-projects/unified-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FadeInOnScrollDirective,
    ScrollTopModule,
    HomeFrontComponent,
    AboutComponent,
    UnifiedProjectsComponent,
    ExperienceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
