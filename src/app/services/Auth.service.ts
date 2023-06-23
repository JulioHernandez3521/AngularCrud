import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Auth } from '../persona';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private readonly URL : string = 'http://localhost:3000/Login'

  constructor(
    private http: HttpClient
  ) { }

  login(creds: Auth){
    
    return this.http.post(this.URL, creds, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            const body = response.body;
            const headers = response.headers;
            const bt = headers.get('Authorization')!;
            const token = bt.replace('Bearer ','');
            localStorage.setItem('token', token);
            return body;
        }));

  }

  getToken () {
    return localStorage.getItem('token');
  }

  

}
