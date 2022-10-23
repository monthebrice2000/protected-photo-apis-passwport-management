import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl : string = "http://localhost:5002/events";  //"https://zoo-animal-api.herokuapp.com/animals/rand/7";
  private speciaEventsUrl : string = "http://localhost:5002/special-events" //"https://zoo-animal-api.herokuapp.com/animals/rand/5"
  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<any>{
    return this.httpClient.get( this.eventsUrl );
  }

  getSpecialEvents(): Observable<any>{
    return this.httpClient.get( this.speciaEventsUrl);
  }
}
