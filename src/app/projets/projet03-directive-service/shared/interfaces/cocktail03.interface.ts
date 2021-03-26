import {IngredientInterface} from './ingredient.interface';

export interface Cocktail03Interface {
  name: string;
  img?: string;
  desc: string;
  ingredients?: IngredientInterface[];
}
