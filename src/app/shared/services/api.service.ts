import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // URL PADRAO JAVA SPRING SERVER
  private apiUrl: string = 'http://localhost:8080';

  get(path: string, params: string = ''): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}${params}`)
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body)
  }

  put(path: string, params: string, body: object = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}${params}`, body)
  }

  delete(path: string, params: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}${params}`)
  }

  
}
