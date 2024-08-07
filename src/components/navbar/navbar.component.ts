import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private timerInterval: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.updateTime();
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.timerInterval = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateTime() {
    const now = new Date();
    const madridTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(now);

    this.currentTime = madridTime;
  }

  scrollTo(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
