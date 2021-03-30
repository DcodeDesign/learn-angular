import { TestBed } from '@angular/core/testing';

import { Cocktail02Service } from './cocktail02.service';

describe('CocktailService', () => {
  let service: Cocktail02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cocktail02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
