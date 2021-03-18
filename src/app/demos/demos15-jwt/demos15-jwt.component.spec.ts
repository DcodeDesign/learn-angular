import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos15JwtComponent } from './demos15-jwt.component';

describe('Demos15JwtComponent', () => {
  let component: Demos15JwtComponent;
  let fixture: ComponentFixture<Demos15JwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos15JwtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos15JwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
