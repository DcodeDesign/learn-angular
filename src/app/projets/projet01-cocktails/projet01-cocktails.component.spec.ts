import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet01CocktailsComponent } from './projet01-cocktails.component';

describe('Projet01CocktailsComponent', () => {
  let component: Projet01CocktailsComponent;
  let fixture: ComponentFixture<Projet01CocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projet01CocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projet01CocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
