import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail03ContainerComponent } from './cocktail03-container.component';

describe('CocktailContainerComponent', () => {
  let component: Cocktail03ContainerComponent;
  let fixture: ComponentFixture<Cocktail03ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail03ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail03ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
