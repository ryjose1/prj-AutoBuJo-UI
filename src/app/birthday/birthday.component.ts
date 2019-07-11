import { Component, OnInit } from '@angular/core';

import { birthdays } from '../birthdays';
import { Month } from './month.enum';


@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  birthdays = birthdays;
  months = Object.values(Month).filter(value => typeof value === 'string');

  constructor() {}

  ngOnInit() {
    console.log(this.months);
  }
}
