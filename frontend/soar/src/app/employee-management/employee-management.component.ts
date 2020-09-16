import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from 'src/app/data/service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';


export class employee {
  constructor(
    public id :number,
    public name:string,
    public email:string,
    public type:string,
    public password:string
    
  ){

  }
}

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  employees:employee[]
  message:string
  username:string
  userid:number
  emp:employee
 
  constructor(
    private employeeService:EmployeeDataService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
  this.refreshEmployees();
  }

  refreshEmployees(){
    this.employeeService.retrieveAllEmployees().subscribe(
      response=>{
        this.employees=response
      }
    )
  }

  updateProfile(){
    this.employeeService.findEmployeeByEmail(this.username).subscribe(
      response=>{
        this.emp=response
          this.router.navigate([this.emp.email,'employees',this.emp.id])
      }
    )
  }

  updateEmployee(id){
    this.router.navigate([this.username,'employees',id])
  }

  deleteEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe(
        response=>{
          this.message=`Successfully Deleted Employee ${id}`
          this.refreshEmployees()
        }
    )
  }
}
