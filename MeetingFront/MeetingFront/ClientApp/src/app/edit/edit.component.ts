import { Component, OnInit } from '@angular/core';
import { Meeting } from '../_models/meeting';
import { SchedulerService } from '../_services/scheduler.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../_models/room';
import { Attender } from '../_models/attender';
import { User } from '../_models/user';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  meeting: Meeting;
  rooms: Room[]=[];
  attendersChoose: Attender[]=[];
  userModel2: User;
  createForm: FormGroup;
  attenderSelected: Attender[]=[];
  

  constructor(private schedulerService: SchedulerService, private alertify: AlertifyService, private route: ActivatedRoute, private router: Router) { 
    this.userModel2 = schedulerService.getUser();
    
  }

  ngOnInit() {
    
    this.loadMeeting();

    this.createForm = new FormGroup({
      id: new FormControl(),
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

  loadMeeting() {
    this.schedulerService.getMeeting(+this.route.snapshot.params['id']).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
      this.attenderSelected = meeting.attenders;
      console.log(this.attenderSelected);
      
      this.createForm.patchValue({
        id: this.meeting.id,
        title: this.meeting.title,
        date: new Date(meeting.timeStart).toLocaleDateString(),
        timeStart: this.meeting.timeStart,
        timeEnd: this.meeting.timeEnd,
        roomId: this.meeting.room.id,
        attenders: this.meeting.attenders,
      });
    }, error => {
      this.alertify.error(error);
    });
  }

  selectAttenders() {
    
  }

  updateMeeting() {
    // this.schedulerService.updateMeeting(this.createForm.value).subscribe(next => {
    //   console.log(this.createForm.value);
    //   this.alertify.success('Meeting are created');
    // }, error => {
    //   console.log(this.createForm.value);
    //   this.alertify.error(error);
    // }, () => {
    //   this.router.navigate(['/home']);
    // });

    console.log(this.createForm.value);
  }

  compareFun(item1, item2): boolean {
    return item1 && item2 ? item1.id == item2.id : item1 === item2;
  }

}
