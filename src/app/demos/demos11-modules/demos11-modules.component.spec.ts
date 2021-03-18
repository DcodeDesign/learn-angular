import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos11ModulesComponent } from './demos11-modules.component';

describe('Demos11RequetesModulesComponent', () => {
  let component: Demos11ModulesComponent;
  let fixture: ComponentFixture<Demos11ModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos11ModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos11ModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
