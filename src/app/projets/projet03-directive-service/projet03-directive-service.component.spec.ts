import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet03DirectiveServiceComponent } from './projet03-directive-service.component';

describe('Projet03DirectiveServiceComponent', () => {
  let component: Projet03DirectiveServiceComponent;
  let fixture: ComponentFixture<Projet03DirectiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet03DirectiveServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet03DirectiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
