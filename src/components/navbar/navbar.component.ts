import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

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
  isMenuOpen: boolean = false;
  isNavbarHidden: boolean = false;
  private lastScrollPosition: number = 0;
  private timerInterval: any;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.updateTime();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      const currentScroll = window.pageYOffset;
      this.isNavbarHidden =
        currentScroll > this.lastScrollPosition && currentScroll > 100;
      this.lastScrollPosition = currentScroll;
    }
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

  sendEmail() {
    if (this.isBrowser) {
      window.location.href = 'mailto:carlos97sdg@gmail.com';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  reloadHome() {
    this.router.navigate(['/'])
      .then(() => {
        if (this.isBrowser) {
          window.scrollTo(0, 0);
        }
      });
  }
}
