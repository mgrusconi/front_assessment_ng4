import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NormalizePipe } from './pipes/normalize.pipe';

import { InitComponent} from './init.component';

import { Http, Response } from '@angular/http';

//routes
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './common/router';
import { HeaderComponent } from './header/header.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';

//Services
import { GetDataService } from './services/get-data.service';
import { GnomeProfileComponent } from './gnome-profile/gnome-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalizePipe,
    InitComponent,
    HeaderComponent,
    GnomeListComponent,
    GnomeProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTER),
    HttpModule
  ],
  providers: [
    GetDataService,
    NormalizePipe
  ],
  bootstrap: [InitComponent]
})
export class AppModule { }
