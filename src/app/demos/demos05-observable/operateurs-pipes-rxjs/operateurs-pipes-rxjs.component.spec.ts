import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateursPipesRxjsComponent } from './operateurs-pipes-rxjs.component';

describe('OperateursPipesRxjsComponent', () => {
  let component: OperateursPipesRxjsComponent;
  let fixture: ComponentFixture<OperateursPipesRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateursPipesRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateursPipesRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
