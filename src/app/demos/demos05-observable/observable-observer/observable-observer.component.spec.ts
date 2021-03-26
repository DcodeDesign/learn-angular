import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableObserverComponent } from './observable-observer.component';

describe('ObservableObserverComponent', () => {
  let component: ObservableObserverComponent;
  let fixture: ComponentFixture<ObservableObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
