import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/data/service/employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { request } from '../inventory-request/inventory-request.component';
import { RequestService } from '../data/service/request.service';
import { employee } from '../employee-management/employee-management.component';
import { InventoryDataService } from '../data/service/inventory-data.service';
import { inventory } from '../inventory-management/inventory-management.component';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.css']
})
export class RequestApprovalComponent implements OnInit {

  username: string
  emp: employee
  req: request[]
  filtReq:request[]
  message:string
  inv:inventory
  re:request
  constructor(
    private employeeService: EmployeeDataService,
    private service: RequestService,
    private inventoryService:InventoryDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username']
    this.req = []
    this.filtReq=[]
    this.message=''
    this.inv=new inventory(-1,'','',0,'',0)
    this.re=new request(-1,-1,-1,'','','',new Date())
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
        this.filtReq =this.req.filter((item)=>item.status==="In Progress")
        this.req=this.filtReq
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

  approve(id,p){
    this.inventoryService.findInventoryById(id).subscribe(
      response=>{
        this.inv=response
        this.inv.itemCount-=1
        this.inventoryService.updateInventory(id,this.inv).subscribe(
          response=>{
              this.message='Request Approved'
              console.log(response)
              this.service.findById(p).subscribe(
                response=>{
                  this.re=response
                  this.re.status="Approved"
                  this.service.updateRequest(p,this.re).subscribe(
                    response=>{
                      this.refreshRequests()
                    }
                  )
                }
              )
          }
        )

      }
    )
     
  }

  reject(i){
    this.service.findById(i).subscribe(
      response=>{
        this.re=response
        this.re.status="Rejected"
        this.service.updateRequest(i,this.re).subscribe(
          response=>{
            this.message="Request Rejected Succesfully"
            this.refreshRequests()
          }
        )
      }
    )
  }

}
