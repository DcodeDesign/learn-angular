import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail04Interface} from '../../shared/interfaces/cocktail04.interface';
import {Cocktail02Service} from '../../shared/services/cocktail02.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cocktail03-container',
  templateUrl: './cocktail03-container.component.html',
  styleUrls: ['./cocktail03-container.component.scss']
})
export class Cocktail03ContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail04Interface[] = [];
  public selectedCocktail: Cocktail04Interface;
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: Cocktail02Service) {
  }

  ngOnInit(): void {
    console.log(this.selectedCocktail);
    this.subscription.add(
      this.cocktailService.$cocktails.subscribe(
      (cocktails: Cocktail04Interface[]) => {
        this.cocktails = cocktails;
      })
    );

    this.subscription.add(
      this.cocktailService.$selectedCocktail.subscribe(
      (selectedCocktail: Cocktail04Interface) => {
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
