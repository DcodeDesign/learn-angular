import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos16RxjsComponent } from './demos16-rxjs.component';

describe('Demos16RxjsComponent', () => {
  let component: Demos16RxjsComponent;
  let fixture: ComponentFixture<Demos16RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos16RxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos16RxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
