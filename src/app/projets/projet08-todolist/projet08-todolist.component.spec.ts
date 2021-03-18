import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet08TodolistComponent } from './projet08-todolist.component';

describe('Projet08TodolistComponent', () => {
  let component: Projet08TodolistComponent;
  let fixture: ComponentFixture<Projet08TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet08TodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet08TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
