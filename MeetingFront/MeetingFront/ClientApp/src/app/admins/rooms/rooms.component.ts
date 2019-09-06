import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/_models/room';
import { SchedulerService } from 'src/app/_services/scheduler.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[]=[];

  constructor(private scheduler: SchedulerService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.scheduler.getRooms().subscribe(response => {
      this.rooms = response;
    }, error => {
      this.alertify.error(error);
    });
  }

}
