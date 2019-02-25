import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsServices {
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>('https://angular-node-mean-crm.herokuapp.com/api/department');
  }

  deleteDepartment(data): Observable<Department> {
    return this.http.delete<Department>(`https://angular-node-mean-crm.herokuapp.com/api/department/${data}`);
  }

  createDepartment(data): Observable<Department> {
    return this.http.post<Department>(`https://angular-node-mean-crm.herokuapp.com/api/department`, data);
  }

  editDepartment({data, id}): Observable<Department> {
    return this.http.patch<Department>(`https://angular-node-mean-crm.herokuapp.com/api/department/${id}`, data);
  }
}