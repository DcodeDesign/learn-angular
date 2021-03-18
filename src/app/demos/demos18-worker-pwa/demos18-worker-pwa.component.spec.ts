import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos18WorkerPwaComponent } from './demos18-worker-pwa.component';

describe('Demos18WorkerPwaComponent', () => {
  let component: Demos18WorkerPwaComponent;
  let fixture: ComponentFixture<Demos18WorkerPwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos18WorkerPwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos18WorkerPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
