import { Component, OnInit } from '@angular/core';
import { InventoryDataService} from 'src/app/data/service/inventory-data.service'

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
  

  constructor(
    private inventoryService:InventoryDataService
  ) {
    
   }

  ngOnInit(): void {
    this.refreshInventory()
  }

  refreshInventory(){
    this.inventoryService.retrieveAllEmployees().subscribe(
      response=>{
        this.myinventory=response
      }
    )
  }

}
