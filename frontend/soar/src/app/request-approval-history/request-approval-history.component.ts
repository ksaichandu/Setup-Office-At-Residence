import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../data/service/employee-data.service';
import { RequestService } from '../data/service/request.service';
import { employee } from '../employee-management/employee-management.component';
import { request } from '../inventory-request/inventory-request.component';

@Component({
  selector: 'app-request-approval-history',
  templateUrl: './request-approval-history.component.html',
  styleUrls: ['./request-approval-history.component.css']
})
export class RequestApprovalHistoryComponent implements OnInit {
  username: string
  emp: employee
  req: request[]
  filtReq=[]
  total:number
  pending:number
completed :number
  constructor(
    private employeeService: EmployeeDataService,
    private service: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

 
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username']
    this.req = []
    this.filtReq=[]
    this.employeeService.findEmployeeByEmail(this.username).subscribe(
      response => {
        this.emp = response
      }
    )
    this.refreshRequests()
  }

  refreshRequests() {
    this.service.retrieveAllRequests().subscribe(
      response => {
        this.req = response
        this.total=this.req.length
        this.filtReq =this.req.filter((item)=>item.status!=="In Progress")
        this.req=this.filtReq
        this.completed=this.req.length
        this.pending= this.total-this.completed
        console.log(response)

      }
    )
  }


}
