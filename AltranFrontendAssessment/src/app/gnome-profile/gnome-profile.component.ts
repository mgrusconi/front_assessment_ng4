import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { GnomeModel } from "../models/gnomeModel";
import { NormalizePipe } from '../pipes/normalize.pipe';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gnome-profile',
  templateUrl: './gnome-profile.component.html',
  styleUrls: ['./gnome-profile.component.css']
})
export class GnomeProfileComponent implements OnInit {

  public gnome: GnomeModel = {
    id: 0,
    name: '',
    thumbnail: '',
    age: 0,
    weight: 0,
    height: 0,
    hair_color: '',
    professions: [],
    friends: []
  
};

  constructor(
    private getDataService: GetDataService, 
    private normalize: NormalizePipe,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getById(this.route.snapshot.params['id']);
  }

  private getById(id: number){
    return this.getDataService.GetAllData().then(
      data => {
        var results = data['Brastlewark'].filter(function (gnome) {
        return gnome.id == id;
      });

      if (results.length <= 0) {
        window.location.href = '/#/not_found'
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
          window.location.href = '/#/not_found'
        }
        this.gnome = results[0];
        this.router.navigate(['/gnome/id/', this.gnome.id ]);
      }, error => {
        console.log(error);
      });
  }

}
