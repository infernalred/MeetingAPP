import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { SchedulerService } from '../_services/scheduler.service';
import { Room } from '../_models/room';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  

  rooms: Room[]=[];
  events: any[]=[];
  calendarVisible = true;
  calendarPlugins = [resourceTimeGridPlugin];
  calendarResources = [this.rooms];
  calendarEvents = [this.events];

  constructor(private scheduler: SchedulerService) { }

  ngOnInit() {
    this.scheduler.getRooms().subscribe(response => {
      this.rooms=response;
    });

    this.scheduler.getMeetings().subscribe(response => {
      this.events=response;
    });
    
  }

}
