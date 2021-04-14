import {Component, OnDestroy, OnInit} from '@angular/core';
import {PanierService} from '../../shared/services/panier.service';
import {Ingredient02Interface} from '../../shared/interfaces/ingredient02.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss']
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient02Interface[];
  public subscription: Subscription;
  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.subscription = this.panierService.$ingredients.subscribe(
      (ingredients: Ingredient02Interface[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
