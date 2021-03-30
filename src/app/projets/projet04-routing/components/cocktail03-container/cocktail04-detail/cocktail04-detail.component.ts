import {Component, Input, OnInit} from '@angular/core';
import {Cocktail04Interface} from '../../../shared/interfaces/cocktail04.interface';


@Component({
  selector: 'app-cocktail04-detail',
  templateUrl: './cocktail04-detail.component.html',
  styleUrls: ['./cocktail04-detail.component.scss']
})
export class Cocktail04DetailComponent implements OnInit {
  @Input() public cocktail: Cocktail04Interface;
  constructor() { }

  ngOnInit(): void {
  }

}
