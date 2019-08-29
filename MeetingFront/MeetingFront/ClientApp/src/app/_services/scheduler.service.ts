import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../_models/room';
import { Meeting } from '../_models/meeting';
import { AuthService } from './auth.service';
import { Attender } from '../_models/attender';
import { User } from '../_models/user';
import { UserModel } from '../_models/usermodel';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  baseUrl = environment.apiUrl;
  userid: string;
  username: string;
  useremail: string;

constructor(private http: HttpClient, public authService: AuthService) {
  
 }

getAttenders(): Observable<Attender[]>{
  return this.http.get<Attender[]>(this.baseUrl + 'attender');
}

getRooms(): Observable<Room[]>{
  return this.http.get<Room[]>(this.baseUrl + 'values/allrooms');
}

getMeetings(): Observable<Meeting[]>{
  return this.http.get<Meeting[]>(this.baseUrl + 'meeting');
}

getMeeting(id): Observable<Meeting>{
  return this.http.get<Meeting>(this.baseUrl + 'meeting/' + id);
}

createMeeting(model: Meeting) {
  return this.http.post(this.baseUrl + 'meeting', model);
}

getUser() {
  let userModel = new UserModel(this.authService.decodedToken.nameid, this.authService.decodedToken.unique_name, this.authService.decodedToken.email);
  return userModel;
}

}
