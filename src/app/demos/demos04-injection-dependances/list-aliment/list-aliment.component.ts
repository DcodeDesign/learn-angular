import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.scss']
})
export class ListAlimentComponent implements OnInit {
  public aliments: Array<{nom: string}> = [
    {nom: 'Tomate'},
    {nom: 'Jambon'},
    {nom: 'Carotte'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
