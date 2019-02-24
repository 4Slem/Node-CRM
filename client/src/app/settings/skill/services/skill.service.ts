import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsServices {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>('http://localhost:3000/api/skills');
  }

  deleteSkill(data): Observable<Skill> {
    return this.http.delete<Skill>(`http://localhost:3000/api/skills/${data}`);
  }

  createSkill(data): Observable<Skill> {
    return this.http.post<Skill>(`http://localhost:3000/api/skills`, data);
  }

  editSkill({data, id}): Observable<Skill> {
    return this.http.patch<Skill>(`http://localhost:3000/api/skills/${id}`, data);
  }
}