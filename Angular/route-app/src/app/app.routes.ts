import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path: '', component:FirstComponent},
  {path: 'second', component:SecondComponent},
  {path: '**', component:NotfoundComponent}
];
