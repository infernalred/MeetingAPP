import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerServiceService {
  roomUrl = 'http://localhost:5555/api/values/allrooms'
  eventUrl = 'http://localhost:5555/api/meeting/getmeetings'

constructor(private http: HttpClient) { }

loadroom() : Observable<any[]>{
  return this.http.get(this.roomUrl)
  .pipe(
    map((response: any) => {
      let resources = response;
      return resources.map(function(room:any) {
        return {id: room.id, title: room.title, eventColor: room.eventColor};
        
      });
    }));
}

loadevent() : Observable<any[]>{
  return this.http.get(this.eventUrl)
  .pipe(
    map((response: any) => {
      let events = response;
      return events.map(function(event:any) {
        return {id: event.id, title: event.title, start: event.start, end: event.end, resourceId: event.resourceId};
        
      });
    }));
}

}
