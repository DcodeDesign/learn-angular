import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos04InjectionDependancesComponent } from './demos04-injection-dependances.component';

describe('Demos04InjectionDependancesComponent', () => {
  let component: Demos04InjectionDependancesComponent;
  let fixture: ComponentFixture<Demos04InjectionDependancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos04InjectionDependancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos04InjectionDependancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
