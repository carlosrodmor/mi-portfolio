import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CVComponent } from '../components/cv/cv.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CVComponent },
];
