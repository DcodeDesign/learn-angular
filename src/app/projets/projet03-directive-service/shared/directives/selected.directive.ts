import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {
  @Input() private appSelected: boolean;
  @HostBinding('style.backgroundColor') private bgColor: string;
  @HostBinding('style.fontWeight') private fWeight: string;
  @HostBinding('style.color') private color: string;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.appSelected) {
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
