import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail03ListComponent } from './cocktail03-list.component';

describe('CocktailListComponent', () => {
  let component: Cocktail03ListComponent;
  let fixture: ComponentFixture<Cocktail03ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail03ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail03ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
