import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../_models/room';
import { Meeting } from '../_models/meeting';
import { AuthService } from './auth.service';
import { Attender } from '../_models/attender';

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
  username: string;

constructor(private http: HttpClient, public authService: AuthService) {
  this.username = authService.decodedToken.unique_name;
 }

getAttenders(): Observable<Attender[]>{
  return this.http.get<Attender[]>(this.baseUrl + 'attender', httpOptions);
}

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
