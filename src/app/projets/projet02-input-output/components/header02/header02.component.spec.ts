import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header02Component } from './header02.component';

describe('HeaderComponent', () => {
  let component: Header02Component;
  let fixture: ComponentFixture<Header02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
