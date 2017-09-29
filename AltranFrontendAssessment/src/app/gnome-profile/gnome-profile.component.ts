import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { GnomeModel } from "../models/gnomeModel";
import { NormalizePipe } from '../pipes/normalize.pipe';
import { Router, ActivatedRoute, Params } from '@angular/router';

import emptyGnomeModel from "../empty_models/gnomeModel";

@Component({
  selector: 'app-gnome-profile',
  templateUrl: './gnome-profile.component.html',
  styleUrls: ['./gnome-profile.component.css']
})
export class GnomeProfileComponent implements OnInit {

  public gnome: GnomeModel = emptyGnomeModel;

  constructor(
    private getDataService: GetDataService, 
    private normalize: NormalizePipe,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      console.log(this.route.snapshot.params);
      this.getById(this.route.snapshot.params['id']);
    }else if(this.route.snapshot.params['name']){
      console.log(this.route.snapshot.params);
      this.getByName(this.route.snapshot.params['name']);
    }else{
      console.log('kb')
    }
    
  }

  private getById(id: number){
    return this.getDataService.GetAllData().then(
      data => {
        var results = data['Brastlewark'].filter(function (gnome) {
        return gnome.id == id;
      });

      if (results.length <= 0) {
        window.location.href = '/not_found'
      }
      this.gnome = results[0];
      this.router.navigate(['/gnome/id/', id ]);
    }, error => {
      console.log(error);
    });
  }

  private getByName(name: string){
    const normalize = this.normalize.transform;
    name = normalize(name);
    return this.getDataService.GetAllData().then(
      data => {
        var results = data['Brastlewark'].filter(function (gnome) {
          return normalize(gnome.name) == name;
        });

        if (results.length <= 0) {
          window.location.href = '/not_found'
        }
        this.gnome = results[0];
        this.router.navigate(['/gnome/name/', normalize(this.gnome.name) ]);
      }, error => {
        console.log(error);
      });
  }

}
