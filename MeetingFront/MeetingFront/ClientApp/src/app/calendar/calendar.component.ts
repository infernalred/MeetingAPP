import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { SchedulerServiceService } from '../_services/schedulerService.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  

  rooms: any[]=[];
  events: any[]=[];
  calendarVisible = true;
  calendarPlugins = [resourceTimeGridPlugin];
  calendarResources = [this.rooms];

  constructor(private schedulerService: SchedulerServiceService) { }

  ngOnInit() {
    this.schedulerService.loadroom().subscribe(response => {
      this.rooms=response;
    });

    this.schedulerService.loadevent().subscribe(response => {
      this.events=response;
    });
    
  }

}
