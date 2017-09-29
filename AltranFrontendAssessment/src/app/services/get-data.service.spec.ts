import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { GetDataService } from './get-data.service';

describe('GetDataService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GetDataService,
      ]
    });
  }));

  it('should return a resolved Promise', async(inject([GetDataService], (service: GetDataService)=>{
    service.GetAllData().then((data) => {
      expect(data['Brastlewark'].length).toEqual(1337);
    });
  })));

});
