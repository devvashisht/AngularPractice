import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chagnedetectref',
  templateUrl: './chagnedetectref.component.html',
  styleUrls: ['./chagnedetectref.component.sass']
})
export class ChagnedetectrefComponent implements OnInit {

  counter = 0;
  data = ['a', 'b', 'c', 'd'];
  constructor(private _ref: ChangeDetectorRef) {}
  get displayText() {
    console.log('re-rendered');
    return this.data.join(', ');
  }
  ngOnInit() {
    const setInterval = window['__zone_symbol__setInterval'];
    setInterval(() => {
      if (Math.random() < 0.1) {
        console.log('Should trigger a change detection'); 
        this.counter++;
        this._ref.detectChanges();
      }
      else {
        console.log('Should not trigger a change detection');
      }
    }, 1000);
  }
}
