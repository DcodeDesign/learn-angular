import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  public title: string = 'Titre';

  public nombre: number = 42;

  public bool: boolean = true;

  public array: Array<number> = [1, 2];

  public obj: { cle: string } = {
    cle: 'value'
  };
  /* or
  public obj: object = {
    cle: 'value'
  };
   */

  public objArray: Array<{ cle: string }> = [
    {cle: 'value one'},
    {cle: 'value two'}
  ];

  /* or
   public objArray: Array<object> = [
    {cle: 'value one'},
    {cle: 'value two'}
  ]; */

  public funct(): string {
    return this.title;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
