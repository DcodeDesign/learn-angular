import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-evenement',
  templateUrl: './liaison-evenement.component.html',
  styleUrls: ['./liaison-evenement.component.scss']
})
export class LiaisonEvenementComponent implements OnInit {
  public color: string = '#e5546d';
  public width: string = '150px';

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(event: MouseEvent): void {
    console.log(event);
    this.color = 'green';
  }

  public changeForm(event: MouseEvent): void {
    console.log(event);
    this.width = '250px';
  }
}
