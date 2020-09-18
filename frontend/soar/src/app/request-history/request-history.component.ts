import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from 'src/app/data/service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { request } from '../inventory-request/inventory-request.component';
import { RequestService } from '../data/service/request.service';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  username:string
  req:request[]
  constructor(
    private employeeService:EmployeeDataService,
    private service: RequestService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
    this.req=[]
    this.refreshRequests()
  }

  refreshRequests(){
    this.service.retrieveAllRequests().subscribe(
      response=>{
        this.req=response
        console.log(response)
      
      }
    )
  }

}
