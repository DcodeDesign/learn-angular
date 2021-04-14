import {Component, Input, OnInit} from '@angular/core';
import {Cocktail04Interface} from '../../../shared/interfaces/cocktail04.interface';
import {PanierService} from '../../../shared/services/panier.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Cocktail02Service} from '../../../shared/services/cocktail02.service';


@Component({
  selector: 'app-cocktail04-detail',
  templateUrl: './cocktail04-detail.component.html',
  styleUrls: ['./cocktail04-detail.component.scss']
})
export class Cocktail04DetailComponent implements OnInit {
  /*@Input() public cocktail: Cocktail04Interface;*/
  public cocktail: Cocktail04Interface;
  private index: string;

  constructor(private panierService: PanierService,
              private activatedRoute: ActivatedRoute,
              private cocktailServices: Cocktail02Service) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktail = this.cocktailServices.getCocktail(+paramMap.get('index'));
    });
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
