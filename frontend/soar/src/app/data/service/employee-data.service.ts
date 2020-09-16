import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { employee } from 'src/app/employee-management/employee-management.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http:HttpClient
  ) { }

  createEmployee(employee){
    return this.http.post(`http://localhost:8080/addEmployee`,employee)
  }

  updateEmployee(id,employee){
    return this.http.put(`http://localhost:8080/updateEmployee/${id}`,employee)
  }

  retrieveAllEmployees(){
    return this.http.get<employee[]>(`http://localhost:8080/employees`)
  }

  findEmployeeById(id){
    return this.http.get<employee>(`http://localhost:8080/employees/${id}`)
  }

  deleteEmployee(id){
    return this.http.delete(`http://localhost:8080/employees/${id}`)
  }
  findEmployeeByEmail(email){
    return this.http.get<employee>(`http://localhost:8080/getemployees/${email}`)
  }

}
