import {Component, Input, OnInit} from '@angular/core';
import {Month} from '../month.enum';

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
  getBirthdays(): string[] {
    const birthdaysThisMonth = [];
    const month = this.month;
    this.birthdays.forEach(person => {
      if (Month[+person.month] === month) {
        birthdaysThisMonth.push(person);
      }
    });
    return birthdaysThisMonth;
  }
}
