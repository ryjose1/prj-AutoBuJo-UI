import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material';
import { MonthComponent } from './month/month.component';
import { BirthdayComponent } from './birthday.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MonthComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  bootstrap: [BirthdayComponent],
  exports: [BirthdayComponent]
})
export class BirthdayModule { }
