import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/_services/scheduler.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Attender } from 'src/app/_models/attender';

@Component({
  selector: 'app-attenders',
  templateUrl: './attenders.component.html',
  styleUrls: ['./attenders.component.css']
})
export class AttendersComponent implements OnInit {
  attenders: Attender[]=[];

  constructor(private scheduler: SchedulerService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.scheduler.getAttenders().subscribe(response => {
      this.attenders = response;
    }, error => {
      this.alertify.error(error);
    });
  }

}
