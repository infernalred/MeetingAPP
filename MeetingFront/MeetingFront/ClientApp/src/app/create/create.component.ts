import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../_services/scheduler.service';
import { Meeting } from '../_models/meeting';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};

  constructor(private schedulerService: SchedulerService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  createMeeting() {
    this.schedulerService.createMeeting(this.model).subscribe(next => {
      console.log(this.model);
      this.alertify.success('Meeting are created');
    }, error => {
      console.log(this.model);
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/home']);
    });
  }

}
