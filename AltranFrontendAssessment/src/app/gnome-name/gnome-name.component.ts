import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GnomeModel } from "../models/gnomeModel";

@Component({
  selector: 'app-gnome-name',
  templateUrl: './gnome-name.component.html'
})

export class GnomeNameComponent implements OnChanges {
   
  @Input()
  gnome: GnomeModel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }

   
}
