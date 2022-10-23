import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : any[] = [];
  constructor(private eventsService: EventsService, private router: Router ) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe( response => this.events = response.data , (err) => {
      console.log( err );
      if( err.status === StatusCodes.UNAUTHORIZED ){
        this.router.navigate( ['/login'])
      }
    } );
  }

}
