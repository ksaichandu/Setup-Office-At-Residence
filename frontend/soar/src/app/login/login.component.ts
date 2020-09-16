import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  invalidLogin= false
  errorMessage=''

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

    handleLogin(){
      if(this.username==='' )
      {
        this.invalidLogin=true
        this.errorMessage='Enter Username!'
      }
      if(this.password==='')
      {
        this.invalidLogin=true
        this.errorMessage='Enter Password!'
      }
      if(this.username===''&& this.password===''){
        this.invalidLogin=true
        this.errorMessage='invalid Credentials'
      }
    }
    register(){
      this.router.navigate(['employees',-1])
    }
}
