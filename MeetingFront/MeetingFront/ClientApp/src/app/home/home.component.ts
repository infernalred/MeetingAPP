import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {
  calendarPlugins = [resourceTimeGridPlugin];
}

