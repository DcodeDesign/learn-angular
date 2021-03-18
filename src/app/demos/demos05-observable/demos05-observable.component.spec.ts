import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos05ObservableComponent } from './demos05-observable.component';

describe('Demos05ObservableComponent', () => {
  let component: Demos05ObservableComponent;
  let fixture: ComponentFixture<Demos05ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos05ObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos05ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
