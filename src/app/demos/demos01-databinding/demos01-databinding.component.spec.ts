import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos01DatabindingComponent } from './demos01-databinding.component';

describe('Demos01DatabindingComponent', () => {
  let component: Demos01DatabindingComponent;
  let fixture: ComponentFixture<Demos01DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos01DatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos01DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
