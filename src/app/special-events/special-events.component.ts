import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: any[] = [];
  constructor(private eventsService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.eventsService.getSpecialEvents().subscribe(
      (response) => {
        console.log(response.data);
        this.specialEvents = response.data
      },
      (err) => {
        if( err.status === StatusCodes.UNAUTHORIZED ){
          this.router.navigate( ['/login'])
        }
      }
    );
  }
}
