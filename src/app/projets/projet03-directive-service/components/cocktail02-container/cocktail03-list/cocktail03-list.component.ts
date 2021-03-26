import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail03Interface} from '../../../shared/interfaces/cocktail03.interface';
import {SelectedDirective} from '../../../shared/directives/selected.directive';

@Component({
  selector: 'app-cocktail03-list',
  templateUrl: './cocktail03-list.component.html',
  styleUrls: ['./cocktail03-list.component.scss']
})
export class Cocktail03ListComponent implements OnInit {
  @Input() public cocktails: Cocktail03Interface[];
  @Input() public selectedCocktail: Cocktail03Interface;
  @Output() public changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
