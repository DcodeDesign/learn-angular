import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective implements OnInit {

  @Input() @HostBinding('class') private class;

  @Input() @HostBinding('attr.role') private role;

  @HostBinding('style.backgroundColor') private bgColor;

  constructor(private el: ElementRef<any>) {
  }

  ngOnInit(): void {
    console.log(this.class);
    this.class = 'test';

    console.log(this.role);
    this.role = 'admin';

    this.bgColor = 'orange';
  }

}
