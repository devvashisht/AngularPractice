import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { map, first, tap, mapTo } from 'rxjs/operators'
@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.sass']
})
export class PipeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mapOperator();
    this.creationOpertor();
  }

  mapOperator() {
    map(x => {
      return x * x;
    })(of(1, 2, 3)).subscribe((v) => console.log(`MAppedvalue: ${v}`));
    first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }
  creationOpertor() {
    const observable = interval(1000 /* number of milliseconds */);
    observable.pipe(tap((value) => console.log("Tapped Valued", value)),
      mapTo(20)
    ).subscribe((value) => { console.log("final value maped tovalue ", value) });
    
    
  }
}
