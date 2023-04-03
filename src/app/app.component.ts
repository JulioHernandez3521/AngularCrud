import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // modalSwich:boolean;
  title = 'CIAS_App';
  
  constructor
  (
    private modalSS:SwitchService,
  ){

  }

  ngOnInit(): void {
    // this.modalSS.$modal.subscribe(data => this.modalSwich = data );
  }

  openModalRegistro(){
    // this.modalSwich = true;
  }
}
