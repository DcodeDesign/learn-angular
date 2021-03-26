import { Component, OnInit } from '@angular/core';
import {AlimentService} from '../aliment.service';

@Component({
  selector: 'app-add-aliment',
  templateUrl: './add-aliment.component.html',
  styleUrls: ['./add-aliment.component.scss']
})
export class AddAlimentComponent implements OnInit {
  public aliment: string = '';

  constructor(private alimentServices: AlimentService) { }

  ngOnInit(): void {
  }

  public addAliment(): void {
    this.alimentServices.addOne(this.aliment);
    this.aliment = '';
  }
}
