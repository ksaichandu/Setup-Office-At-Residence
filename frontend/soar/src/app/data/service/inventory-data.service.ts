import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventory } from 'src/app/inventory-management/inventory-management.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllInventory(){
    return this.http.get<inventory[]>(`http://localhost:8080/inventory`)
  }

  createInventory(inventory){
    return this.http.post(`http://localhost:8080/addInventory`,inventory)
  }

  findInventoryById(id){
    return this.http.get<inventory>(`http://localhost:8080/inventory/${id}`)
  }

  updateInventory(id,inventory){
    return this.http.put(`http://localhost:8080/updateInventory/${id}`,inventory)
  }

 
}
