import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {
  displayButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
