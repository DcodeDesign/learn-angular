import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  public users: Array<{ nom: string }> = [
    {nom: 'Paul'},
    {nom: 'Julie'},
    {nom: 'Jean'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
