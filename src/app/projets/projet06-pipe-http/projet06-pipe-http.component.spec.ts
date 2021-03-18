import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet06PipeHttpComponent } from './projet06-pipe-http.component';

describe('Projet06PipeHttpComponent', () => {
  let component: Projet06PipeHttpComponent;
  let fixture: ComponentFixture<Projet06PipeHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet06PipeHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet06PipeHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
