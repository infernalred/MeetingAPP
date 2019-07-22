import { Component, OnInit, ViewChild } from '@angular/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { ResourceInput } from '@fullcalendar/resource-common/structs/resource';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  roomUrl = 'http://localhost:5555/api/values/allrooms'

  rooms: any;
  calendarVisible = true;
  calendarPlugins = [resourceTimeGridPlugin];
  calendarResources = [this.rooms];

  constructor(private http: HttpClient) { }

  calendarResource = [];
  ngOnInit() {
  }
loadroom(){
  return this.http.get(this.roomUrl)
  .pipe(
    map((response: any) => {
      const rooms = response;
      if (rooms) {
        this.calendarResources = rooms;
      }
    })
  );
}
}
