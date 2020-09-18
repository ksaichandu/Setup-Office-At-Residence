import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'src/app/inventory-request/inventory-request.component';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http:HttpClient
  ) { }

  createRequests(myrequest){
    return this.http.post<request[]>(`http://localhost:8080/addRequests`,myrequest)
  }
  retrieveAllRequests(){
    return this.http.get<request[]>(`http://localhost:8080/Requests`)
  }
}
