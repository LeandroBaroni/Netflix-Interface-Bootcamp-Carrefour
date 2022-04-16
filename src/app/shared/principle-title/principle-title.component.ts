import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-principle-title',
  templateUrl: './principle-title.component.html',
  styleUrls: ['./principle-title.component.scss']
})
export class PrincipleTitleComponent implements OnInit {

  infoCircle = faInfoCircle;
  play = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
