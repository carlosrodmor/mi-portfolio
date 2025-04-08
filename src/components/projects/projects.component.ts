import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  ngOnInit() {
    register();
  }

  projects = [
    {
      title: 'Cocktail DB',
      description:
        'This project was created with Angular to demonstrate skills such as the use of RxJS, state management, reusable components, and other advanced features of the framework. Through this development, I was able to apply reactive programming knowledge and create a modern, functional interface that leverages the advantages of Angular. This project reflects my commitment to continuous learning of front-end technologies and my ability to develop dynamic, responsive web applications using modern frameworks.',
      image: 'assets/project4.png',
      url: 'https://cocktail-db-dv.netlify.app/',
    },
    {
      title: 'José M. Rodríguez Portfolio',
      description:
        'Personal portfolio of José M. Rodríguez, a prominent Asturian writer and engineer. With a successful career as a telecommunications engineer, he has dedicated much of his professional life to engineering, reaching prestigious positions in the sector. At the same time, his passion for literature has led him to write and publish works in both Asturian and Spanish, making significant contributions to the literary culture of Asturias. This portfolio showcases his dual career as an engineer and writer, reflecting his commitment to technology and the preservation of Asturian language and culture.',
      image: 'assets/project0.png',
      url: 'https://carlosrodmor.github.io/portfolio-chema/',
    },
    {
      title: 'Ironhack Project',
      description:
        "My first project at Ironhack was a collaborative effort with a classmate, where we developed a platformer video game using JavaScript and the DOM. In this project, we focused on implementing the game's mechanics, controls, and interactive elements. To start the game, the player simply presses the 'Enter' key, and to reset or restart the game, the 'Space' key is used. This project was a great opportunity to deepen our understanding of JavaScript and DOM manipulation while also having fun creating a functional and engaging game.",
      image: 'assets/project1.png',
      url: 'https://carlosrodmor.github.io/octopus-game/',
    },
    {
      title: 'Final Project Ironhack',
      description:
        'For our final project at Ironhack, I teamed up with two friends to create a full-stack web application for booking private programming lessons. We used the MERN stack (MongoDB, Express, React, Node.js) to build both the front-end and back-end, ensuring a smooth user experience. The platform allows users to browse available courses, book lessons, and manage their schedules. This project was an incredible experience that allowed us to apply everything we learned during the course, from designing a dynamic user interface to implementing secure server-side logic and database management.',
      image: 'assets/project2.png',
      url: 'https://code-connectt.netlify.app/',
    },
  ];

  swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
  };
}
