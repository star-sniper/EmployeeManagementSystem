import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Employee } from './employee';

import { EmployeeRaw } from './employeeRaw';

@Injectable()
export class EmployeeService {


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("https://web422-teamsdata-harora.herokuapp.com/employees")
  }

  saveEmployee(employee : EmployeeRaw) : Observable<any> {
    return this.http.put<any>("https://web422-teamsdata-harora.herokuapp.com/employee/" + employee._id, employee);
  }

  getEmployee(id) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>("https://web422-teamsdata-harora.herokuapp.com/employee-raw/" + id);
  }
}