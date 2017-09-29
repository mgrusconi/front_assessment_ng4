import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeDataComponent } from './gnome-data.component';
import { GnomeProfessionsComponent } from '../gnome-professions/gnome-professions.component';

import gnomeMock from '../mocks/gnomeMock';


describe('GnomeDataComponent', () => {
  let component: GnomeDataComponent;
  let fixture: ComponentFixture<GnomeDataComponent>;
  let gnomeDataComponent: GnomeDataComponent;
  let element: any;
  let de: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GnomeDataComponent,
        GnomeProfessionsComponent
       ]
    });
    fixture = TestBed.createComponent(GnomeDataComponent);
    gnomeDataComponent = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
  }));

  it('should render Gnome Height', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('span.height').innerText).toEqual('35.88 cm');
  });

  it('should render Gnome Weight', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('span.weight').innerText).toEqual('106.14 g');
  });

  it('should render Gnome ages', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('span.age').innerText).toEqual('351 year old');
  });

  it('should render Gnome Hair Color', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('span.hair_color').innerText).toEqual('Blue');
  });

  it('should count the 2 element in a.friend tag', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelectorAll('a.friend').length).toEqual(2);
  });

  it('should render Gnome Frind Name', () => {
    gnomeDataComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('a.friend').innerText).toEqual('Fizwood Voidtossle');
  });

});
