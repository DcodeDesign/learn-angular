import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos08FormulaireComponent } from './demos08-formulaire.component';

describe('Demos08FormulaireComponent', () => {
  let component: Demos08FormulaireComponent;
  let fixture: ComponentFixture<Demos08FormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos08FormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos08FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
