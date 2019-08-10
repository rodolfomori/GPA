import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    listarUsers(): Observable<Users[]> {
      return this.http.get<Users[]>(`${this.API}/users`);
    }

    listarConsultorias(): Observable<any[]> {
      return this.http.get<any[]>(`${this.API}/consultorias`);
    }

    listarStatus(): Observable<any[]> {
      return this.http.get<any[]>(`${this.API}/status`);
    }
  }
