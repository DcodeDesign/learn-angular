import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail} from '../../../../projet01-cocktails/interfaces/cocktail';

@Component({
  selector: 'app-cocktail02-list',
  templateUrl: './cocktail02-list.component.html',
  styleUrls: ['./cocktail02-list.component.scss']
})
export class Cocktail02ListComponent implements OnInit {
  @Input() public cocktails: Cocktail;
  @Output() public changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
