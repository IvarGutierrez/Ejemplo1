import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  n1!:number;
  n2!:number;
  operacion:string='ninguno';
  resultado!:number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
