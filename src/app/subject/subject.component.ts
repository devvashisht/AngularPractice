import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(1);
    subject.next(2);
    subject.subscribe({
      next: (v) => console.log(`observerc : ${v}`)
    });
  }

}
