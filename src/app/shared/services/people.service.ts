import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private api: ApiService) { }

  get(params: string = ''): Observable<any> {
    return this.api.get(`/people/`, params)
  }

  post(body: Person): Observable<any> {
    return this.api.post(`/people`, body)
  }

  put(body: Person, id: string): Observable<any> {
    return this.api.put(`/people/`, id, body)
  }

  delete(id: any): Observable<any> {
    return this.api.delete(`/people/`, id)
  }
}
