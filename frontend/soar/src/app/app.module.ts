import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryRequestComponent } from './inventory-request/inventory-request.component';
import { RequestHistoryComponent } from './request-history/request-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeManagementComponent,
    InventoryManagementComponent,
    InventoryComponent,
    InventoryRequestComponent,
    RequestHistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
