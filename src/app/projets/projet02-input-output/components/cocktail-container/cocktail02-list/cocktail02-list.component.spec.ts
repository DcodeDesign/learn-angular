import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail02ListComponent } from './cocktail02-list.component';

describe('CocktailListComponent', () => {
  let component: Cocktail02ListComponent;
  let fixture: ComponentFixture<Cocktail02ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail02ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail02ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
