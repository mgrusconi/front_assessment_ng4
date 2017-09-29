import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeProfessionsComponent } from './gnome-professions.component';

describe('GnomeProfessionsComponent', () => {
  let component: GnomeProfessionsComponent;
  let fixture: ComponentFixture<GnomeProfessionsComponent>;
  let gnomeProfessionsComponent: GnomeProfessionsComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeProfessionsComponent ]
    });
    fixture = TestBed.createComponent(GnomeProfessionsComponent);
    gnomeProfessionsComponent = fixture.componentInstance;
    element = fixture.nativeElement;
  }));


  it('should count the 3 element in span.professions tag', () => {
    gnomeProfessionsComponent.professions = ['Tailor', 'Miner', 'Cook'];
    fixture.detectChanges();
    expect(element.querySelectorAll('span.professions').length).toEqual(3);
  });

  it('should render `Tailor` in span.professions tag', () => {
    gnomeProfessionsComponent.professions = ['Tailor'];
    fixture.detectChanges();
    expect(element.querySelector('span.professions').innerText).toEqual('Tailor');
  });
});
