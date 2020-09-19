import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../data/service/employee-data.service';
import { InventoryDataService } from '../data/service/inventory-data.service';
import { employee } from '../employee-management/employee-management.component';
import { inventory } from '../inventory-management/inventory-management.component';
import { RequestService } from 'src/app/data/service/request.service';

export class request {
  constructor(
    public request_id: number,
    public developer_id: number,
    public inventory_id: number,
    public developer_remark: string,
    public status: string,
    public manager_remark: string,
    public date: Date
  ) {

  }
}
@Component({
  selector: 'app-inventory-request',
  templateUrl: './inventory-request.component.html',
  styleUrls: ['./inventory-request.component.css']
})
export class InventoryRequestComponent implements OnInit {

  myinventory: inventory[]
  username: string
  emp: employee
  req: request
  myrequest: request[]
  message: string
  already:string
  filtReq:request[]

  constructor(
    private inventoryService: InventoryDataService,
    private employeeService: EmployeeDataService,
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.message = ''
    this.already=''
    this.myrequest = []
    this.username = this.route.snapshot.params['username']
    this.employeeService.findEmployeeByEmail(this.username).subscribe(
      response => {
        this.emp = response
      }
    )
    this.refreshInventory()
  }

  refreshInventory() {
    this.inventoryService.retrieveAllInventory().subscribe(
      response => {
        this.myinventory = response
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

  addToCart(id){
    for (let r of this.myrequest) {
      if (r.inventory_id === id) {
       this.already='exists'
      }
    }
    if(this.already!='exists'){
    this.req = new request(-1, this.emp.id, id,'', 'In Progress', '', new Date)
      this.myrequest.push(this.req)
      console.log(this.myrequest)
    }
  }

  RemoveFromCart(id) {
    for (let r of this.myrequest) {
      if (r.inventory_id === id) {
       this.already='exists'
      }
    }
    if(this.already==='exists'){
      this.filtReq=[]
      this.req = new request(-1, this.emp.id, id, '', 'In Progress', '', new Date)
     this.filtReq =this.myrequest.filter((item)=>item.inventory_id!=this.req.inventory_id)
     this.myrequest=this.filtReq
      console.log(this.myrequest)
      this.already=''
      }
  }

  submitRequest() {
    this.requestService.createRequests(this.myrequest).subscribe(
      response => {
        console.log(response)
        this.message = 'Request Succesful'
      }
    )
  }

 

}
