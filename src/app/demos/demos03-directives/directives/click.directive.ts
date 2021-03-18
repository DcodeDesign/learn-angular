import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective implements OnInit{

  @HostListener('mouseenter', ['$event']) private surligne(event: MouseEvent): void {
    console.log(event);
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') private normal(): void {
    console.log(event);
    this.el.nativeElement.style.backgroundColor = 'initial';
  }

  @HostListener('window:click', ['$event']) private test(event: MouseEvent): void {
    console.log(event);
  }

  constructor(private el: ElementRef<any>) { }

  ngOnInit(): void { }

}
