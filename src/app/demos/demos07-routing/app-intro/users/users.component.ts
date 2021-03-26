import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] =  [
    {
      id: 1,
      name: 'Julie'
    },
    {
      id: 2,
      name: 'Jean'
    },
    {
      id: 3,
      name: 'Pierre'
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  public redirectionUser(user: User): void {
    this.router.navigate([user.id, user.name], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name
      },
      fragment: 'foo'
    }).then(r => console.log(r));
  }
}
