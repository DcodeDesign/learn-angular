import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet02InputOutputComponent } from './projet02-input-output.component';

describe('Projet02InputOutputComponent', () => {
  let component: Projet02InputOutputComponent;
  let fixture: ComponentFixture<Projet02InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet02InputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet02InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
