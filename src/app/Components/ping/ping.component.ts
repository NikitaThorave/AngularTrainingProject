import { Component, OnInit } from '@angular/core';
import { PingPongService } from 'src/app/Services/ping-pong.service';

@Component({
  selector: 'at-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  constructor(public pingPongService: PingPongService) {}

  ngOnInit(): void {
  }

}
