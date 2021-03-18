import { Component, OnInit } from '@angular/core';
import {Cocktail} from '../../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit {
  cocktail: Cocktail =  {
    name: 'Mojito',
    img:
      'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
    desc:
      'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
