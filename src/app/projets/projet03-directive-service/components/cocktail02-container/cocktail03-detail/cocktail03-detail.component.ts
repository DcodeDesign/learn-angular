import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from '../../../../projet01-cocktails/interfaces/cocktail';

@Component({
  selector: 'app-cocktail03-detail',
  templateUrl: './cocktail03-detail.component.html',
  styleUrls: ['./cocktail03-detail.component.scss']
})
export class Cocktail03DetailComponent implements OnInit {
  @Input() public cocktail: Cocktail;
  constructor() { }

  ngOnInit(): void {
  }

}
