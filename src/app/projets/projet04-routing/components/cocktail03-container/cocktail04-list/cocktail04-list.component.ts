import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail04Interface} from '../../../shared/interfaces/cocktail04.interface';
import {Selected02Directive} from '../../../shared/directives/selected02.directive';

@Component({
  selector: 'app-cocktail04-list',
  templateUrl: './cocktail04-list.component.html',
  styleUrls: ['./cocktail04-list.component.scss']
})
export class Cocktail04ListComponent implements OnInit {
  @Input() public cocktails: Cocktail04Interface[];
  @Input() public selectedCocktail: Cocktail04Interface;
  @Output() public changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
