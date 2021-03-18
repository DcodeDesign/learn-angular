import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos07RoutingComponent } from './demos07-routing.component';

describe('Demos07RoutingComponent', () => {
  let component: Demos07RoutingComponent;
  let fixture: ComponentFixture<Demos07RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos07RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos07RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
