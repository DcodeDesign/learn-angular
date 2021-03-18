import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos24SentryErreursComponent } from './demos24-sentry-erreurs.component';

describe('Demos24SentryErreursComponent', () => {
  let component: Demos24SentryErreursComponent;
  let fixture: ComponentFixture<Demos24SentryErreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos24SentryErreursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos24SentryErreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
