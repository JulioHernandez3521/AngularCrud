import { Component, OnInit } from '@angular/core';
import { Auth } from '../persona';
import { AuthService } from '../services/Auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: Auth = {
    email: '',
    password:''
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  login(form :NgForm){
    
    console.log(this.model)

     this.authService.login(this.model)
     .subscribe(res =>{
       this.router.navigate(['/']);
     })
  }

}
