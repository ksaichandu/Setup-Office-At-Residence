import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from 'src/app/data/service/employee-data.service';
import { Router } from '@angular/router';


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
 
  constructor(
    private employeeService:EmployeeDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
  this.refreshEmployees();
  }

  refreshEmployees(){
    this.employeeService.retrieveAllEmployees().subscribe(
      response=>{
        this.employees=response
      }
    )
  }

  updateEmployee(id){
    this.router.navigate(['employees',id])
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
