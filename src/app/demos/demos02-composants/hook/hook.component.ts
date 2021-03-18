import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss']
})
export class HookComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() public fruit: string;
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('Le constructeur, fruit =' + this.fruit);
  }

  ngOnInit(): void {
    console.log('ngOnInit, fruit =' + this.fruit);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck, fruit =' + this.fruit);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit, fruit =' + this.fruit);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked, fruit =' + this.fruit);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit, fruit =' + this.fruit);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked, fruit =' + this.fruit);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy, fruit =' + this.fruit);
  }

  deleteFruit(): void {
    this.deleteF.emit(this.fruit);
  }
}
