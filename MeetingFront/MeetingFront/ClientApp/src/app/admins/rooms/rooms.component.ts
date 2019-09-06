import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/_models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[]=[];

  constructor() { }

  ngOnInit() {
  }

}
