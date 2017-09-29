import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GnomeModel } from "../models/gnomeModel";

@Component({
  selector: 'app-gnome-data',
  templateUrl: './gnome-data.component.html'
})
export class GnomeDataComponent implements OnChanges {

  @Input()
  gnome: GnomeModel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }

}
