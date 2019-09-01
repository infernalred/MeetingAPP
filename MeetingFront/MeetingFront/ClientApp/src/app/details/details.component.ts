import { Component, OnInit } from '@angular/core';
import { Meeting } from '../_models/meeting';
import { SchedulerService } from '../_services/scheduler.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Attender } from '../_models/attender';
import { Room } from '../_models/room';
import { User } from '../_models/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  meeting: Meeting;
  
  rooms: Room[]=[];
  attendersChoose: Attender[]=[];
  userModel2: User;
  createForm: FormGroup;

  constructor(private schedulerService: SchedulerService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadMeeting();
  }

  loadMeeting() {
    this.schedulerService.getMeeting(+this.route.snapshot.params['id']).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
      
    console.log(this.meeting)
    }, error => {
      this.alertify.error(error);
    });
  }

}
