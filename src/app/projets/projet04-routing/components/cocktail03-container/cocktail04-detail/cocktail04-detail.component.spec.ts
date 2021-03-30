import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail04DetailComponent } from './cocktail04-detail.component';

describe('CocktailDetailComponent', () => {
  let component: Cocktail04DetailComponent;
  let fixture: ComponentFixture<Cocktail04DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail04DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail04DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
