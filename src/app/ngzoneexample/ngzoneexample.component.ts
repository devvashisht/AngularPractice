import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ngzoneexample',
  templateUrl: './ngzoneexample.component.html',
  styleUrls: ['./ngzoneexample.component.sass']
})
export class NgzoneexampleComponent implements OnInit {
  data: Array<string> = ['a', 'b', 'c', 'd'];
  counter = 0;
  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      setInterval(() => {
        if (Math.random() < 0.1) {
          console.log('Should trigger a change detection');
          this._ngZone.run(() => {
            this.counter++;
          });
        }
        else {
          console.log('Should not trigger a change detection');
        }
      }, 1000);
    })
  }

  get displayText() {
    console.log('re-rendered');
    return this.data.join(', ');
  }

}
