import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-data-binding',
  templateUrl: './double-data-binding.component.html',
  styleUrls: ['./double-data-binding.component.scss']
})
export class DoubleDataBindingComponent implements OnInit {
  public content: string = 'Holla' ;

  constructor() { }

  ngOnInit(): void {
  }

}
