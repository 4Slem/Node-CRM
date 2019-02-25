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
    return this.http.get<Skill[]>('https://angular-node-mean-crm.herokuapp.com/api/skills');
  }

  deleteSkill(data): Observable<Skill> {
    return this.http.delete<Skill>(`https://angular-node-mean-crm.herokuapp.com/api/skills/${data}`);
  }

  createSkill(data): Observable<Skill> {
    return this.http.post<Skill>(`https://angular-node-mean-crm.herokuapp.com/api/skills`, data);
  }

  editSkill({data, id}): Observable<Skill> {
    return this.http.patch<Skill>(`https://angular-node-mean-crm.herokuapp.com/api/skills/${id}`, data);
  }
}