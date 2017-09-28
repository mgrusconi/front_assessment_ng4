import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GnomeListComponent } from '../gnome-list/gnome-list.component';
import { GnomeProfileComponent } from '../gnome-profile/gnome-profile.component';

export const APPROUTER:Routes = [
    {path:'', component: GnomeListComponent},
    {path:'list/:prof', component: GnomeListComponent},
    {path:'gnome/id/:id', component: GnomeProfileComponent},
    {path:'**', component: GnomeProfileComponent}
]