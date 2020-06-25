import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-creational-operator',
  templateUrl: './creational-operator.component.html',
  styleUrls: ['./creational-operator.component.sass']
})
export class CreationalOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.observable();
    this.createClickEventObservable();
    this.SetIntervalObservable();

  }


  public observable() {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.error(23);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

  SetIntervalObservable() {
    const observable = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('hi')
      }, 1000);
    });
    observable.subscribe((value) => {
      console.log("SetIntervalEmit", value);
    })
  }
  createClickEventObservable() {
    // From one or multiple values
    fromEvent(document, 'click').subscribe(() => console.log('observable from click event  : Clicked!'));
  }
}
