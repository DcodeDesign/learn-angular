import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail04ListComponent } from './cocktail04-list.component';

describe('CocktailListComponent', () => {
  let component: Cocktail04ListComponent;
  let fixture: ComponentFixture<Cocktail04ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail04ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail04ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
