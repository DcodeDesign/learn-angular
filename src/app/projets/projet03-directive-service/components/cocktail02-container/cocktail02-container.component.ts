import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail03Interface} from '../../shared/interfaces/cocktail03.interface';
import {CocktailService} from '../../shared/services/cocktail.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cocktail02-container',
  templateUrl: './cocktail02-container.component.html',
  styleUrls: ['./cocktail02-container.component.scss']
})
export class Cocktail02ContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail03Interface[] = [];
  public selectedCocktail: Cocktail03Interface;
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    console.log(this.selectedCocktail);
    this.subscription.add(
      this.cocktailService.$cocktails.subscribe(
      (cocktails: Cocktail03Interface[]) => {
        this.cocktails = cocktails;
      })
    );

    this.subscription.add(
      this.cocktailService.$selectedCocktail.subscribe(
      (selectedCocktail: Cocktail03Interface) => {
        this.selectedCocktail = selectedCocktail;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectCocktail(index: number): void {
    this.cocktailService.selectCocktail(index);
  }
}
