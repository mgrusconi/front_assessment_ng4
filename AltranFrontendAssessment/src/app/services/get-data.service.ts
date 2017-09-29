import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {GnomeModel} from "../models/gnomeModel";

@Injectable()
export class GetDataService {


  private url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"; 
  
  constructor (private http: Http){}

  public GetAllData(): Promise<GnomeModel[]> {
    return this.http.get(this.url).toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
