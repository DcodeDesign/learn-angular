import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public id: string;
  public name: string;
  public nameQuery: string;
  public fragment: string;
  public details: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.name = paramMap.get('name');
    });

    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.nameQuery = paramMap.get('name');
      this.details = paramMap.get('details');
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
    });

  }

}
