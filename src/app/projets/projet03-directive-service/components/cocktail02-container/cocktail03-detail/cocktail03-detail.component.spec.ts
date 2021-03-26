import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail03DetailComponent } from './cocktail03-detail.component';

describe('CocktailDetailComponent', () => {
  let component: Cocktail03DetailComponent;
  let fixture: ComponentFixture<Cocktail03DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail03DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail03DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
