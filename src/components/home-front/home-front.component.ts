import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../directives/fade-in-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective],
  templateUrl: './home-front.component.html',
  styleUrls: ['./home-front.component.scss'],
})
export class HomeFrontComponent {}
