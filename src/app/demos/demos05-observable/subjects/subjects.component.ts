import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  public s1Test: Array<number> = [];
  public s2Test: Array<number> = [];

  constructor() {
  }

  ngOnInit(): void {
    // Subject
    const subject = new Subject<number>();

    const s1 = subject.subscribe((x) => {
      console.log('[s1]: ' + x);
      this.s1Test.push(x);
    });

    const s2 = subject.subscribe((x) => {
      console.log('[s2]: ' + x);
      this.s2Test.push(x);
    });

    subject.next(1);

    s1.unsubscribe();

    subject.next(2);

    // BehaviorSubject
    const subjectB = new BehaviorSubject<number>(0);

    const s3 = subjectB.subscribe((x) => {
      console.log('[s3]: ' + x);
      this.s1Test.push(x);
    });

    const s4 = subjectB.subscribe((x) => {
      console.log('[s4]: ' + x);
      this.s2Test.push(x);
    });

    subjectB.next(1);

    // s3.unsubscribe();

    subjectB.next(2);

  }

}
