import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { GnomeModel } from "../models/gnomeModel";
import { NormalizePipe } from '../pipes/normalize.pipe';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css']
})

export class GnomeListComponent implements OnInit {

  public promiseGnomeList: Promise<GnomeModel[]>;
  public gnomeList: Array<GnomeModel>;
  public gnomeTotal: number;
  public errorMessage: String;

  constructor(
    private getDataService: GetDataService, 
    private normalize: NormalizePipe,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.route)
    console.log(this.route.snapshot)
    console.log(this.route.snapshot.params)
    if(this.route.snapshot.params['prof']){
      this.getListByProfession(this.route.snapshot.params['prof']);
    }else{
      this.LoadData();
    }
  }

  private LoadData(){
    this.promiseGnomeList = this.getDataService.GetAllData();
    this.promiseGnomeList.then(
      data => {
        this.gnomeList = data['Brastlewark'];
        this.gnomeTotal = data['Brastlewark'].length;
      },
      error =>  this.errorMessage = <any>error
    );
  }

  public getListByProfession(prof: string){
    const normalize = this.normalize.transform;
    prof = normalize(prof);
    return this.getDataService.GetAllData().then(
      data => {
        let results = data['Brastlewark'].filter(function (gnome) {
          return gnome.professions.some(function (p) {
            return normalize(p) == prof;
          });
        });
        if (results.length <= 0) {
          window.location.href = '/#/not_found'
        }
        this.gnomeList = results;
        this.gnomeTotal = results.length;
        this.router.navigate(['/list', prof ]);
      }, error => {
        console.log(error);
      });
  }
}