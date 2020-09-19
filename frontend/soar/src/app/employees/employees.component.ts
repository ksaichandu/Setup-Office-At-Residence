import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeDataService} from 'src/app/data/service/employee-data.service'
import { employee } from '../employee-management/employee-management.component';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  id:number
  emp:employee
  message:string
  username:string
  constructor(
   private employeeService:EmployeeDataService,
   private route:ActivatedRoute,
   private router:Router
  ) { }

  ngOnInit(): void {
    this.message=''
    this.username=this.route.snapshot.params['username']
    this.id=Number(this.route.snapshot.params['id'])
    this.emp =new employee(this.id,'','','Select Designation','')
    if(this.id!=-1){
      this.employeeService.findEmployeeById(this.id).subscribe(
        response=>{
          this.emp=response
        }
      )
    }
  }

  saveEmployee(){
    if(this.id===-1){
    this.employeeService.createEmployee(this.emp).subscribe(
      data=>{
        if(this.username==='newUser')
        this.message="Succesful"
        else{
          this.router.navigate([this.username,'employeeManagement'])
        }
      }
    )
    }
    else{
      this.employeeService.updateEmployee(this.id,this.emp).subscribe(
        response=>{
          if(this.emp.type=="Employee Admin"){
          this.router.navigate([this.username,'employeeManagement'])
          }
          if(this.emp.type=="Infrastructure Admin"){
            this.router.navigate([this.username,'inventoryManagement'])
          }
          if(this.emp.type=="Software Developer"){
            this.router.navigate([this.username,'inventoryRequest'])
          }
          if(this.emp.type=="Manager"){
            this.router.navigate([this.username,'RequestApproval'])
          }
        }
      )
    }
  }

}
