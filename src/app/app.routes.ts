import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CausesComponent } from './components/causes/causes.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
  {
    path: 'volunteer',
    component: VolunteerComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'causes',
    component: CausesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
