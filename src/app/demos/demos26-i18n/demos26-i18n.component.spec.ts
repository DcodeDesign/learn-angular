import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos26I18nComponent } from './demos26-i18n.component';

describe('Demos26I18nComponent', () => {
  let component: Demos26I18nComponent;
  let fixture: ComponentFixture<Demos26I18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos26I18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos26I18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
