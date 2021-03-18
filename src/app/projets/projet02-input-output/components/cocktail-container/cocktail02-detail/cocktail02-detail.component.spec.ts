import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail02DetailComponent } from './cocktail02-detail.component';

describe('CocktailDetailComponent', () => {
  let component: Cocktail02DetailComponent;
  let fixture: ComponentFixture<Cocktail02DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail02DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail02DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
