import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../_models/room';
import { Meeting } from '../_models/meeting';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getRooms(): Observable<Room[]>{
  return this.http.get<Room[]>(this.baseUrl + 'values/allrooms', httpOptions);
}

getMeetings(): Observable<Meeting[]>{
  return this.http.get<Meeting[]>(this.baseUrl + 'meeting', httpOptions);
}

createMeeting(model: Meeting) {
  return this.http.post(this.baseUrl + 'meeting', model, httpOptions);
}

}
