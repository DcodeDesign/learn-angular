import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos22GestionChargementComponent } from './demos22-gestion-chargement.component';

describe('Demos22GestionChargementComponent', () => {
  let component: Demos22GestionChargementComponent;
  let fixture: ComponentFixture<Demos22GestionChargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos22GestionChargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos22GestionChargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
