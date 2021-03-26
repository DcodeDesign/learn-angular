import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header03Component } from './header03.component';

describe('HeaderComponent', () => {
  let component: Header03Component;
  let fixture: ComponentFixture<Header03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
