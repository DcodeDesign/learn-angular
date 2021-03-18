import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos10RequetesHttpComponent } from './demos10-requetes-http.component';

describe('Demos10RequetesHttpComponent', () => {
  let component: Demos10RequetesHttpComponent;
  let fixture: ComponentFixture<Demos10RequetesHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos10RequetesHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos10RequetesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
