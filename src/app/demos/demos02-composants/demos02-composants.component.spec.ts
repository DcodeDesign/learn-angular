import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos02ComposantsComponent } from './demos02-composants.component';

describe('Demos02ComposantsComponent', () => {
  let component: Demos02ComposantsComponent;
  let fixture: ComponentFixture<Demos02ComposantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos02ComposantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos02ComposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
