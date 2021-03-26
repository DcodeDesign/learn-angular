import {Component, Input, OnInit} from '@angular/core';
import {Cocktail02} from '../../../interfaces/cocktail02';

@Component({
  selector: 'app-cocktail02-detail',
  templateUrl: './cocktail02-detail.component.html',
  styleUrls: ['./cocktail02-detail.component.scss']
})
export class Cocktail02DetailComponent implements OnInit {
  @Input() public cocktail: Cocktail02;
  constructor() { }

  ngOnInit(): void {
  }

}
