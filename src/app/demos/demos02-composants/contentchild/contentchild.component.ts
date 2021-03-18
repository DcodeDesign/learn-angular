import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FruitComponent} from '../fruit/fruit.component';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.scss']
})
export class ContentchildComponent implements OnInit {

  public fruits: string[] = ['fraise', 'kiwi'];
  @ViewChild('myinput') public el: ElementRef<HTMLInputElement>;
  @ViewChildren(FruitComponent) public list: QueryList<FruitComponent>;

  public addFruit(): void {
    console.log(this.list);
    this.fruits.push(this.el.nativeElement.value);
    this.el.nativeElement.value = '';
  }

  public deleteFruit(fruit: string): void {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }

  ngOnInit(): void {
  }
}
