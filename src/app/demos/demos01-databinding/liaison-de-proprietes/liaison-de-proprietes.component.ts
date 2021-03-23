import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-de-proprietes',
  templateUrl: './liaison-de-proprietes.component.html',
  styleUrls: ['./liaison-de-proprietes.component.scss']
})
export class LiaisonDeProprietesComponent implements OnInit {
  public inputType: string = 'date';


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputType = 'number';
    }, 3000);
  }

}
