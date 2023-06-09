import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

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
    return this.httpClient.post(`${this.URL_BASE}`, persona);
  }

  deletePersona(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_BASE}/${id}`);
  }
  
  getPersonaById(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.URL_BASE}/${id}`);
  }

  actualizarPersona(id:number, persona: Persona):Observable<Persona>{
    return this.httpClient.put<Persona>(`${this.URL_BASE}/${id}`, persona);
  }
  
}
