import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos06DirectiveServiceComponent } from './demos06-directive-service.component';

describe('Demos06DirectiveServiceComponent', () => {
  let component: Demos06DirectiveServiceComponent;
  let fixture: ComponentFixture<Demos06DirectiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos06DirectiveServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos06DirectiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
