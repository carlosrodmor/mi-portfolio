import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';
import { HomeFrontComponent } from '../../components/home-front/home-front.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { FeaturedProjectComponent } from '../../components/featured-project/featured-project.component';

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
    FeaturedProjectComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
