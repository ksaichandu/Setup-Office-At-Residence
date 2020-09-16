import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryDataService } from '../data/service/inventory-data.service';
import { inventory } from '../inventory-management/inventory-management.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  id:number
  inv:inventory
  newUser:string
  username:string

  constructor(
    private inventoryService:InventoryDataService,
    private route:ActivatedRoute,
   private router:Router
  ) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['username']
    this.id=Number(this.route.snapshot.params['id'])
    this.inv=new inventory(this.id,'','Select Inventory Type',0,'',0)
    if(this.id!=-1){
      this.inventoryService.findInventoryById(this.id).subscribe(
        response=>{
          this.inv=response
        }
      )
    }
  }

  saveInventory(){
    if(this.id===-1){
    this.inventoryService.createInventory(this.inv).subscribe(
      data=>{
        console.log(data)
        this.router.navigate([this.username,'inventoryManagement'])
      }
    )
    }
    else{
      this.inventoryService.updateInventory(this.id,this.inv).subscribe(
        response=>{
          console.log(response)
          this.router.navigate(['employeeManagement'])
        }
      )
    }
  }

}
