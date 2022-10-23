import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registrationUrl : string = "http://localhost:5002/registration";
  private loginUrl : string = "http://localhost:5002/login";



  constructor(private httpClient: HttpClient) { }

  registerUser( user : any ): Observable<Object> {
    return this.httpClient.post( this.registrationUrl, { ...user }, {
      headers : {
        'Content-Type': 'application/json'
      }
    } );
  }

  loginUser( user : any ): Observable<Object> {
    return this.httpClient.post( this.loginUrl, { ...user }, {
      headers : {
        'Content-Type': 'application/json'
      }
    } );
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout():void{
    return localStorage.removeItem('token');
  }
}
