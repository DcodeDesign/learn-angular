import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {FruitComponent} from './fruit/fruit.component';

@Component({
  selector: 'app-demos02-composants',
  templateUrl: './demos02-composants.component.html',
  styleUrls: ['./demos02-composants.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated // default
  // encapsulation: ViewEncapsulation.none
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class Demos02ComposantsComponent implements OnInit {

  @ViewChild('myinputSecond') public el: ElementRef<HTMLInputElement>;
  @ViewChildren(FruitComponent) public list: QueryList<FruitComponent>;
  public countFruit = 0;
  public fruit = '';
  public fruits: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  public addFruit(): void {
   this.fruits.push(this.fruit);
   this.fruit = '';
  }

  public deleteFruit(fruit: string): void {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }

  // Ref local
  public addFruitBis(ref: HTMLInputElement): void {
    this.fruits.push(ref.value);
    ref.value = '';
  }

  // @ViewChild
  public addFruitSecond(): void {
    this.fruits.push(this.el.nativeElement.value);
    this.el.nativeElement.value = '';
    console.log(this.list);
    this.countFruit = this.list.length;
  }
}
