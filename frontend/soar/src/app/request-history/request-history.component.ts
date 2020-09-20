import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from 'src/app/data/service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { request } from '../inventory-request/inventory-request.component';
import { RequestService } from '../data/service/request.service';
import { employee } from '../employee-management/employee-management.component';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  username:string
  req:request[]
  filtReq:request[]
  emp:employee
  constructor(
    private employeeService:EmployeeDataService,
    private service: RequestService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
    this.req=[]
    this.filtReq=[]
    this.employeeService.findEmployeeByEmail(this.username).subscribe(
        response=>{
          this.emp=response
          console.log(this.emp.id)
        }
    )
    this.refreshRequests()
  }

  refreshRequests(){
    this.service.retrieveAllRequests().subscribe(
      response=>{
        this.req=response
        this.filtReq =this.req.filter((item)=>item.developer_id===this.emp.id)
        this.req=this.filtReq
        console.log(response)
      
      }
    )
  }

}
