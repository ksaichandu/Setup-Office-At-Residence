import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryDataService} from 'src/app/data/service/inventory-data.service'
import { EmployeeDataService } from '../data/service/employee-data.service';
import { employee } from '../employee-management/employee-management.component';

export class inventory{
  constructor(
    public id:number,
    public name:string,
    public type:string,
    public cost:number,
    public pathToImage:string,
    public itemCount:number

  ){

  }
}
@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {
  
  myinventory:inventory[]
  username:string
  emp:employee

  constructor(
    private inventoryService:InventoryDataService,
    private employeeService:EmployeeDataService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
    this.refreshInventory()
  }

  refreshInventory(){
    this.inventoryService.retrieveAllInventory().subscribe(
      response=>{
        this.myinventory=response
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


 

}
