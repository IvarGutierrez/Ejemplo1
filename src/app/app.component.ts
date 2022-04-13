import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo1';
  nombre ='ivar';
  apellido ='gutierrez';
  texto='escriba su nombre aqui';
  texto1="";
  mario="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg";
  cambiartexto():void
  {
    this.texto="escriba su segundo nombre"
  }

  getsuma(n1: number,n2:number)
{
  return n1+n2;
}
}

