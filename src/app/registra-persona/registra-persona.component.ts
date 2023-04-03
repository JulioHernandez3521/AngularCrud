import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registra-persona',
  templateUrl: './registra-persona.component.html',
  styleUrls: ['./registra-persona.component.css']
})
export class RegistraPersonaComponent implements OnInit {

 
  persona : Persona = new Persona();
  constructor(
    private modalSS: SwitchService,
    private personaServicio: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.persona)

  }

  savePersona(){
    this.persona.fecha_ins = new Date();
    this.persona.estatus = "A";  
    this.personaServicio.savePersona(this.persona).subscribe(data =>{
      console.log(data);
      this.updateListPersonas();
    },error => console.error(error));
  }

  updateListPersonas(){
    this.router.navigate(['personas']);
    Swal.fire('Empleado actualizado',`El empleado ${this.persona.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    // console.log(this.persona);
    this.savePersona();
  }

  closeModal (){
    this.modalSS.$modal.emit(false);
  }

}
