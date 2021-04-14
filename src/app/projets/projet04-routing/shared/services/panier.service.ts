import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ingredient02Interface} from '../interfaces/ingredient02.interface';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public $ingredients: BehaviorSubject<Ingredient02Interface[]> = new BehaviorSubject<Ingredient02Interface[]>(null)

  constructor() { }

  public addToPanier(ingredients: Ingredient02Interface[]): void {
    const currentValue = this.$ingredients.value;
    console.log(currentValue);
    if (currentValue) {
      const fullArray = [...currentValue, ...ingredients];
      const obj = fullArray.reduce((acc, value) => {
        if (acc[value.name]) {
          acc[value.name] += value.quantity;
        } else {
          acc[value.name] = value.quantity;
        }
        return acc;
      }, {});
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key]
      }));
      console.log(result);
      this.$ingredients.next(result);
    } else {
      this.$ingredients.next(ingredients);
    }
  }
}
