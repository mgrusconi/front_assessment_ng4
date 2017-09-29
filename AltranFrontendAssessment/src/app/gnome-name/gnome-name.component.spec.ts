import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GnomeNameComponent } from './gnome-name.component';

import gnomeMock from '../mocks/gnomeMock';

describe('GnomeNameComponent', () => {
  let component: GnomeNameComponent;
  let fixture: ComponentFixture<GnomeNameComponent>;
  let gnomeNameComponent: GnomeNameComponent;
  let element: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeNameComponent ]
    });
    fixture = TestBed.createComponent(GnomeNameComponent);
    gnomeNameComponent = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  
  it('should render `Malbert Gyrogrill` in H1 tag', () => {
    gnomeNameComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('h1').innerText).toContain('Malbert Gyrogrill');
  });

  it('should render `#35` in span.pull-right', () => {
    gnomeNameComponent.gnome = gnomeMock;
    fixture.detectChanges();
    expect(element.querySelector('span.pull-right').innerText).toEqual('#35');
  });
});
