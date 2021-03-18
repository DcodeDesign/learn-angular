import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet04RoutingComponent } from './projet04-routing.component';

describe('Projet04RoutingComponent', () => {
  let component: Projet04RoutingComponent;
  let fixture: ComponentFixture<Projet04RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet04RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet04RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
