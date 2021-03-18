import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet07NgrxComponent } from './projet07-ngrx.component';

describe('Projet07NgrxComponent', () => {
  let component: Projet07NgrxComponent;
  let fixture: ComponentFixture<Projet07NgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet07NgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet07NgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
