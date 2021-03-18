import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-demos03-directives',
  templateUrl: './demos03-directives.component.html',
  styleUrls: ['./demos03-directives.component.scss']
})
export class Demos03DirectivesComponent implements OnInit {
  hide = true;

  @HostListener('window:click', ['$event']) private test(event: MouseEvent): void {
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
