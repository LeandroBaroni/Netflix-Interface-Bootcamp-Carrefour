import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test-interval',
  templateUrl: './test-interval.component.html',
  styleUrls: ['./test-interval.component.scss']
})
export class TestIntervalComponent implements OnInit {

  data: number = 0;
  text = 'teste 1';

  constructor() { }

  ngOnInit(): void {
    const obs = interval(1000);
    obs.subscribe((d) => {
      this.data = d;
      if(this.text === 'teste 1') {
        this.text = 'teste 2 caralho';
      }else{
        this.text = 'teste 1';
      }
    });
  }

}
