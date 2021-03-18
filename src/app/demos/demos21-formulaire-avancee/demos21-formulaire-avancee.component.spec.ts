import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos21FormulaireAvanceeComponent } from './demos21-formulaire-avancee.component';

describe('Demos21FormulaireAvanceeComponent', () => {
  let component: Demos21FormulaireAvanceeComponent;
  let fixture: ComponentFixture<Demos21FormulaireAvanceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos21FormulaireAvanceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos21FormulaireAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
