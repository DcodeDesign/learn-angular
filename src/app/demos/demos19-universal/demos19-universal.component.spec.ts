import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos19UniversalComponent } from './demos19-universal.component';

describe('Demos19UniversalComponent', () => {
  let component: Demos19UniversalComponent;
  let fixture: ComponentFixture<Demos19UniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos19UniversalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos19UniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
