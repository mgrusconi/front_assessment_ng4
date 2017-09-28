import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeProfileComponent } from './gnome-profile.component';

describe('GnomeProfileComponent', () => {
  let component: GnomeProfileComponent;
  let fixture: ComponentFixture<GnomeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
