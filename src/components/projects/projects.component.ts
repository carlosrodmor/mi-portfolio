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
      title: 'Ironhack Project',
      description:
        "My first project at Ironhack was a collaborative effort with a classmate, where we developed a platformer video game using JavaScript and the DOM. In this project, we focused on implementing the game's mechanics, controls, and interactive elements. To start the game, the player simply presses the 'Enter' key, and to reset or restart the game, the 'Space' key is used. This project was a great opportunity to deepen our understanding of JavaScript and DOM manipulation while also having fun creating a functional and engaging game.",
      image: 'assets/project1.png',
    },
    {
      title: 'Final Project Ironhack',
      description:
        'For our final project at Ironhack, I teamed up with two friends to create a full-stack web application for booking private programming lessons. We used the MERN stack (MongoDB, Express, React, Node.js) to build both the front-end and back-end, ensuring a smooth and responsive user experience. The platform allows users to browse available courses, book lessons, and manage their schedules. This project was an incredible experience that allowed us to apply everything we learned during the course, from designing a dynamic user interface to implementing secure server-side logic and database management.',
      image: 'assets/project2.png',
    },
    {
      title: 'React Portfolio',
      // escribeme una descripcion de este portfolio antiguo que estaba creado con React y que decidiste cambiar a Angular porque mi experiencia laboral es con Angular
      description:
        "In my previous portfolio, which I built using React, I showcased a range of projects that highlight my skills and growth as a developer. The portfolio featured a sleek, modern design and interactive elements that demonstrated my proficiency in front-end development and user experience design. Now, I'm presenting this work within my new portfolio, which I've developed using Angular. This transition reflects my ongoing commitment to learning and adapting to new technologies, as well as my ability to create dynamic, responsive web applications using different frameworks.",
      image: 'assets/project3.png',
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
