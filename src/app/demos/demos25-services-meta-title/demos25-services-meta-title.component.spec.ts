import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos25ServicesMetaTitleComponent } from './demos25-services-meta-title.component';

describe('Demos25ServicesMetaTitleComponent', () => {
  let component: Demos25ServicesMetaTitleComponent;
  let fixture: ComponentFixture<Demos25ServicesMetaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos25ServicesMetaTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos25ServicesMetaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
