import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail02ContainerComponent } from './cocktail02-container.component';

describe('CocktailContainerComponent', () => {
  let component: Cocktail02ContainerComponent;
  let fixture: ComponentFixture<Cocktail02ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail02ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cocktail02ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
