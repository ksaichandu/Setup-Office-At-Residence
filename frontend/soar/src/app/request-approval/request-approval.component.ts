import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/data/service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { request } from '../inventory-request/inventory-request.component';
import { RequestService } from '../data/service/request.service';
import { employee } from '../employee-management/employee-management.component';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.css']
})
export class RequestApprovalComponent implements OnInit {

  username: string
  emp: employee
  req: request[]
  constructor(
    private employeeService: EmployeeDataService,
    private service: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username']
    this.req = []
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
        console.log(response)

      }
    )
  }
  updateProfile() {
    this.employeeService.findEmployeeByEmail(this.username).subscribe(
      response => {
        this.emp = response
        this.router.navigate([this.emp.email, 'employees', this.emp.id])
      }
    )
  }

}
