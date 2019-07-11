import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() month: string;
  @Input() birthdays;

  constructor() { }

  ngOnInit() {
  }

  
}
