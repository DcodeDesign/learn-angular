import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

interface User {
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-operateurs-pipes-rxjs',
  templateUrl: './operateurs-pipes-rxjs.component.html',
  styleUrls: ['./operateurs-pipes-rxjs.component.scss']
})
export class OperateursPipesRxjsComponent implements OnInit {
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public fullName: string;

  constructor() {
  }

  ngOnInit(): void {
    this.user.next({
        fname: 'Jean',
        lname: 'Dupuis'
      }
    );

    const s1 = this.user.pipe(
      filter((user: User) => true),
      map((user: User) => {
        return `${user.fname}  ${user.lname}`;
      })
    ).subscribe((fullName: string) => {
      console.log(fullName);
      this.fullName = fullName;
    });


  }

}
