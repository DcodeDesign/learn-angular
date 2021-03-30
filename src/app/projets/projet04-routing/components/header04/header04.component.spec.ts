import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header04Component } from './header04.component';

describe('HeaderComponent', () => {
  let component: Header04Component;
  let fixture: ComponentFixture<Header04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
