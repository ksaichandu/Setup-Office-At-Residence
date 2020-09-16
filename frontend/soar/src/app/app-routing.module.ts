import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EmployeesComponent } from './employees/employees.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent} ,
  {path:':username/employees/:id',component:EmployeesComponent},
  {path:':username/employeeManagement',component:EmployeeManagementComponent},
  {path:':username/inventoryManagement',component:InventoryManagementComponent},
  {path:':username/inventory/:id',component:InventoryComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
