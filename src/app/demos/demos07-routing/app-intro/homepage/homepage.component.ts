import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public redirection(): void {
    this.router.navigate(['users'], { relativeTo: this.route }).then(r => console.log(r));
    // this.router.navigateByUrl('users').then(r => console.log(r));
  }
}
