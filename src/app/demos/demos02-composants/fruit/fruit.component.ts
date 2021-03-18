import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  @Input() fruit: string;
  @Output() private deleteF: EventEmitter<string> = new EventEmitter<string>() ;
  constructor() { }

  ngOnInit(): void {
  }

  public deleteFruit(): void {
    this.deleteF.emit(this.fruit);
  }

}
