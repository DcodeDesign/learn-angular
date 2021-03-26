import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-observable-observer',
  templateUrl: './observable-observer.component.html',
  styleUrls: ['./observable-observer.component.scss']
})
export class ObservableObserverComponent implements OnInit, OnDestroy {
  public test: Array<any> = [];
  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    const observable = new Observable((observer: Observer<any>) => {
      const data = 1;
      observer.next(data);
      observer.next(2);
      observer.next(3);
      setTimeout(() => observer.next(4), 2000);
      // observer.complete(); coupe le flux de donnée observer.next(5) ne sera pas executer
      observer.next(5);
      // observer.error(new Error('oops'));
    });

    /*const observer = {
     next: a => console.log('[next]: ' + a),
     complete: () => console.log('[completed]'),
     error: a => console.log('[error]: ' + a)
   };*/

    /*observable.subscribe({
      next: a => console.log('[next]: ' + a),
      complete: () => console.log('[completed]'),
      error: a => console.log('[error]: ' + a)
    });*/

    this.subscription = observable.subscribe((x) => {
      console.log('[next]: ' + x);
      this.test.push(x);
    }, (x) => {
      console.log('[error]: ' + x);
    }, () => {
      console.log('[completed]');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
