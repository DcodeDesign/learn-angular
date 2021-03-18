import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos27PushNotificationsComponent } from './demos27-push-notifications.component';

describe('Demos27PushNotificationsComponent', () => {
  let component: Demos27PushNotificationsComponent;
  let fixture: ComponentFixture<Demos27PushNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos27PushNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos27PushNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
