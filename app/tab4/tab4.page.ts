import { Component, OnInit } from '@angular/core';
import { IoT1ClickProjects } from 'aws-sdk';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private calendar: Calendar) {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }
  openCalendar() {
    this.calendar.openCalendar(new Date()).then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );

  }
}

