import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../_services/scheduler.service';
import { Meeting } from '../_models/meeting';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { Room } from '../_models/room';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Attender } from '../_models/attender';
import { User } from '../_models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  rooms: Room[]=[];
  attendersChoose: Attender[]=[];
  userModel2: User;
  createForm: FormGroup;

  constructor(private schedulerService: SchedulerService, private alertify: AlertifyService, private router: Router) {
    this.userModel2 = schedulerService.getUser();
  }

  ngOnInit() {
   this.createForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      timeStart: new FormControl('', Validators.required),
      timeEnd: new FormControl('', Validators.required),
      userId: new FormControl(this.userModel2.id),
      roomId: new FormControl('', Validators.required),
      attenders: new FormControl('', Validators.required)
    }, this.datesValidator);

    this.schedulerService.getAttenders().subscribe(response => {
      this.attendersChoose = response;
    });

    this.schedulerService.getRooms().subscribe(response => {
      this.rooms=response;
    });
  }

  datesValidator(g: FormGroup) {
    return g.get('timeStart').value < g.get('timeEnd').value ? null : {'above': false};
  }

  createMeeting() {
    this.schedulerService.createMeeting(this.createForm.value).subscribe(next => {
      console.log(this.createForm.value);
      this.alertify.success('Meeting are created');
    }, error => {
      console.log(this.createForm.value);
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/home']);
    });

    //console.log(this.createForm.value);
  }

}
