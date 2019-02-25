import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Position } from '../models/positions';

@Injectable({
  providedIn: 'root',
})
export class PositionServices {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>('https://angular-node-mean-crm.herokuapp.com/api/position');
  }

  deletePosition(data): Observable<Position> {
    return this.http.delete<Position>(`https://angular-node-mean-crm.herokuapp.com/api/position/${data}`);
  }

  createPosition(data): Observable<Position> {
    return this.http.post<Position>(`https://angular-node-mean-crm.herokuapp.com/api/position`, data);
  }

  editPosition({data, id}): Observable<Position> {
    return this.http.patch<Position>(`https://angular-node-mean-crm.herokuapp.com/api/position/${id}`, data);
  }
}