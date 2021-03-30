import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSelected02]'
})
export class Selected02Directive implements OnChanges {
  @Input() private appSelected02: boolean;
  @HostBinding('style.backgroundColor') private bgColor: string;
  @HostBinding('style.fontWeight') private fWeight: string;
  @HostBinding('style.color') private color: string;
  @HostBinding('style.borderColor') private borderColor: string;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.appSelected02) {
      this.bgColor = 'var(--primary)';
      this.fWeight = '500';
      this.color = 'white';
    } else {
      this.bgColor = 'white';
      this.fWeight = '400';
      this.color = 'var(--text-regular)';
    }
  }

}
