import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  nombre: string='Cecilia';
  apellido: string='Ferrer';
  imagen: string='https://i.pinimg.com/736x/f7/5a/77/f75a77021c26249cf6e967ac6929f5c9.jpg';
  numero: number=10;
  ancho=200;
  alto:string="auto";
 
    constructor(){}

    getVal(): number{
      return 5;
    }

    aumentarImg():void{
      this.ancho+=10;
    }

    reducirImg():void{
      this.ancho-=10;
    }
  

    }


