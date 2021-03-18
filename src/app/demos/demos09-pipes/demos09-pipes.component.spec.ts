import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos09PipesComponent } from './demos09-pipes.component';

describe('Demos09PipesComponent', () => {
  let component: Demos09PipesComponent;
  let fixture: ComponentFixture<Demos09PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos09PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos09PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
