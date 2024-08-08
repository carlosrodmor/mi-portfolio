import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FadeInOnScrollDirective } from '../directives/fade-in-scroll.directive';
import { ScrollTopModule } from 'primeng/scrolltop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    FadeInOnScrollDirective,
    ScrollTopModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
