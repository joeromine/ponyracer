import { RacesComponent } from './races/races.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//export default ROUTS = Routs([{ path: 'racea', component: RacesComponent }]);

export const ROUTES: Routes = [
  { path: 'races', component: RacesComponent },
  { path: '', component: HomeComponent }
];
