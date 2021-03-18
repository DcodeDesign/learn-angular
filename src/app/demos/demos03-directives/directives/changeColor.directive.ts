import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @HostListener('mouseenter', ['$event']) private hight(event: MouseEvent): void {
   // this.el.nativeElement.style.backgroundColor = this.hightColor;

    this.el.nativeElement.style.backgroundColor = this.changeColor.backgroundColor;
    this.el.nativeElement.style.color = this.changeColor.color;
  }

  @HostListener('mouseleave', ['$event']) private hightLeave(event: MouseEvent): void {
    // this.el.nativeElement.style.backgroundColor = this.hightColor;

    this.el.nativeElement.style.backgroundColor = 'initial';
    this.el.nativeElement.style.color = 'initial';
  }


  // @Input('color') public hightColor = '';

  @Input('appChangeColor') public changeColor: { color: string, backgroundColor: string};

  constructor(private el: ElementRef<any>) {
  }

  ngOnInit(): void {

  }

}
