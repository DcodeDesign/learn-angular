import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos20LibrariePersonnelleComponent } from './demos20-librarie-personnelle.component';

describe('Demos20LibrariePersonnelleComponent', () => {
  let component: Demos20LibrariePersonnelleComponent;
  let fixture: ComponentFixture<Demos20LibrariePersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos20LibrariePersonnelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos20LibrariePersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
