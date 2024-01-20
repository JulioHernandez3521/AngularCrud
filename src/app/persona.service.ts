import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { Persona } from './persona';
import { catchError } from 'rxjs/operators'
import Swal from 'sweetalert2';
 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//URL BASE
  private readonly URL_BASE = `http://localhost:3000/api/v1/personas`; 

  constructor( private httpClient: HttpClient) { }

  get getPersonas(): Observable<Persona[]>{

    return  this.httpClient.get<Persona[]>(`${this.URL_BASE}`);

  }

  savePersona(persona: Persona): Observable<Object>{
    // return this.httpClient.post(`${this.URL_BASE}`, persona);
    return this.httpClient.post(`${this.URL_BASE}`, persona).pipe(
    map((obj:any) => obj.persona as (Persona)));
  }

  deletePersona(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_BASE}/${id}`);
  }
  
  getPersonaById(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.URL_BASE}/${id}`).pipe(
      map((obj:any) => obj.persona as (Persona)));
  }

  actualizarPersona(id:number, persona: Persona):Observable<Persona>{
    return this.httpClient.put<Persona>(`${this.URL_BASE}/${id}`, persona);
  }
  
}
