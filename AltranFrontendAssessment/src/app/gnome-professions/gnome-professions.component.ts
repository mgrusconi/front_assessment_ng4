import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gnome-professions',
  templateUrl: './gnome-professions.component.html',
  styleUrls: ['./gnome-professions.component.css']
})
export class GnomeProfessionsComponent implements OnChanges {

  @Input()
  professions: Array<string>;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
  }

}
