import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
