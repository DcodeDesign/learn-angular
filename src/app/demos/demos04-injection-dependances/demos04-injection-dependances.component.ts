import { Component, OnInit } from '@angular/core';
import {AlimentService} from './aliment.service';

@Component({
  selector: 'app-demos04-injection-dependances',
  templateUrl: './demos04-injection-dependances.component.html',
  styleUrls: ['./demos04-injection-dependances.component.scss'],
  providers: [AlimentService] // autre moyen d'injecter un services
})
export class Demos04InjectionDependancesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
