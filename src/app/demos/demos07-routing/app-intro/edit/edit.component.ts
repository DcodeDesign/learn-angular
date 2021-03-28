import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public save: boolean = false;

  public canDeactivate(): boolean {
    if(this.save){
      return true;
    } else {
      return confirm('êtes vous sur de quitter ?');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
