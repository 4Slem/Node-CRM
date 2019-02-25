import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployee(data): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:3000/api/employee', {
      params: data
    });
  }

  deleteEmployee(data): Observable<Employee> {
    return this.http.delete<Employee>(`http://localhost:3000/api/employee/${data}`);
  }

  createEmployee(data): Observable<Employee> {
    return this.http.post<Employee>(`http://localhost:3000/api/employee`, data);
  }

  editEmployee({data, id}): Observable<Employee> {
    return this.http.patch<Employee>(`http://localhost:3000/api/employee/${id}`, data);
  }
}