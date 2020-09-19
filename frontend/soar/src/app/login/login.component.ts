import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../data/service/employee-data.service';
import { employee } from '../employee-management/employee-management.component';

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
  emp:employee

  constructor(
    private employeeService:EmployeeDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

    handleLogin(){
      this.employeeService.findEmployeeByEmail(this.username).subscribe(
        response=>{
          this.emp=response
          if(this.emp.type==='Employee Admin'&& this.password===this.emp.password){
            this.router.navigate([this.emp.email,'employeeManagement'])
          }
          if(this.emp.type==='Infrastructure Admin'&& this.password===this.emp.password){
            this.router.navigate([this.emp.email,'inventoryManagement'])
          }
          if(this.emp.type==='Software Developer'&& this.password===this.emp.password){
            this.router.navigate([this.emp.email,'inventoryRequest'])
          }
          if(this.emp.type==='Manager'&& this.password===this.emp.password){
            this.router.navigate([this.emp.email,'RequestApproval'])
          }
        }
      )
      
    }
    register(){
      this.router.navigate(['newUser','employees',-1])
    }
}
