import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData : any = {}
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(e: Event): void{
    e.preventDefault();
    this.authService.loginUser( this.loginUserData ).subscribe(
      ( response : any )=> {
        localStorage.setItem('token', response.token );
        this.router.navigate( ['/special-events'])
      },
      err => console.log( err )
    );
  }

}
