import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true,
})
export class FadeInOnScrollDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: window.innerWidth < 768 ? '0px 0px -50px 0px' : '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'visible');
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
