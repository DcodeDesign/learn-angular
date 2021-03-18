import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos17RxjsTestComponent } from './demos17-rxjs-test.component';

describe('Demos17RxjsTestComponent', () => {
  let component: Demos17RxjsTestComponent;
  let fixture: ComponentFixture<Demos17RxjsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos17RxjsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos17RxjsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
