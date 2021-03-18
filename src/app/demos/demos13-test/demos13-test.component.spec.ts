import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos13TestComponent } from './demos13-test.component';

describe('Demos13RequetesTestComponent', () => {
  let component: Demos13TestComponent;
  let fixture: ComponentFixture<Demos13TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos13TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos13TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
