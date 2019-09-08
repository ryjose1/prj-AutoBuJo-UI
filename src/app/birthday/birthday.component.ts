import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  birthdayForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.birthdayForm = this.formBuilder.group({
      name: '',
      month: '',
      day: ''
    });
  }

  onSubmit(birthdayData) {
    console.warn('birthday is being added', birthdayData);
    this.birthdays.push({month: birthdayData.month, name: birthdayData.name, day: birthdayData.day});
    this.birthdayForm.reset();
  }
  ngOnInit() {
  }
}
