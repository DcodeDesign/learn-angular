import {Component, Input, OnInit} from '@angular/core';
import {Ingredient02Interface} from '../../../shared/interfaces/ingredient02.interface';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Input() public ingredients: Ingredient02Interface[];
  constructor() { }

  ngOnInit(): void {
  }

}
