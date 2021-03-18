import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos12AnimationsComponent } from './demos12-animations.component';

describe('Demos12RequetesAnimationsComponent', () => {
  let component: Demos12AnimationsComponent;
  let fixture: ComponentFixture<Demos12AnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos12AnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos12AnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
