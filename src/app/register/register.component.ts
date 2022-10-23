import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData : any = {};
  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

  register(e: Event) : void{
    e.preventDefault();
    console.log( this.registerUserData );
    this.authService.registerUser( this.registerUserData ).subscribe( res => console.log(res) , err => console.log( err ) );
  }

}
