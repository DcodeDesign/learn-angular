import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos14MaterialComponent } from './demos14-material.component';

describe('Demos14MaterialComponent', () => {
  let component: Demos14MaterialComponent;
  let fixture: ComponentFixture<Demos14MaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos14MaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos14MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
