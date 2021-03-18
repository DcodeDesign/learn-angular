import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet05FormulairesComponent } from './projet05-formulaires.component';

describe('Projet05FormulairesComponent', () => {
  let component: Projet05FormulairesComponent;
  let fixture: ComponentFixture<Projet05FormulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet05FormulairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet05FormulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
