import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { MonthComponent } from './birthday/month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BirthdayComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
