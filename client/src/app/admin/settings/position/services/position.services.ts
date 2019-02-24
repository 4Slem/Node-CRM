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
    return this.http.get<Position[]>('http://localhost:3000/api/position');
  }

  deletePosition(data): Observable<Position> {
    return this.http.delete<Position>(`http://localhost:3000/api/position/${data}`);
  }

  createPosition(data): Observable<Position> {
    return this.http.post<Position>(`http://localhost:3000/api/position`, data);
  }

  editPosition({data, id}): Observable<Position> {
    return this.http.patch<Position>(`http://localhost:3000/api/position/${id}`, data);
  }
}