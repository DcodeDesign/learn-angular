import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos03DirectivesComponent } from './demos03-directives.component';

describe('Demos03DirectivesComponent', () => {
  let component: Demos03DirectivesComponent;
  let fixture: ComponentFixture<Demos03DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos03DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos03DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
