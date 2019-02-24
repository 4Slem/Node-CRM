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
    return this.http.get<Department[]>('http://localhost:3000/api/department');
  }

  deleteDepartment(data): Observable<Department> {
    return this.http.delete<Department>(`http://localhost:3000/api/department/${data}`);
  }

  createDepartment(data): Observable<Department> {
    return this.http.post<Department>(`http://localhost:3000/api/department`, data);
  }

  editDepartment({data, id}): Observable<Department> {
    return this.http.patch<Department>(`http://localhost:3000/api/department/${id}`, data);
  }
}