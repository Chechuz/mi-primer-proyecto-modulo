import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { User } from '../../../data/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  @Input() userElement: User;
  @Output() onSave = new EventEmitter();
  @ViewChild('title') titulo!: ElementRef<HTMLHeadElement>; //"title" es el id en el html

  constructor(){
    this.userElement = new User;
    console.log("Ejecutando contructor de Detalle...");
  
  }

  ngOnInit(): void{
    console.log('Componente iniciado...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Detalle, cambios en las propiedades');
    console.log('Changes ' +JSON.stringify(changes));
    this.titulo.nativeElement.innerHTML='Ficha de: ' + this.userElement.firstname + ' '+ this.userElement.lastname;
  }

  ngDoCheck(): void{
    console.log('Componente Detalle, modificado (doCheck)');
  }
  
  ngOnDestroy(): void{
    console.log('Componente Detalle, destruido');
  }

  onSaveClient():void{
    //Opcion 1: codigo para guardar los cambios del cliente
    //          Llamada API para cambiar los datos
    //...

    //Opcion 2: Grabar los cambios del cliente lo gestiona el padre
    //          Se ejecuta una fx en el padre para guardar los cambios del cl.
    this.onSave.emit();
    console.log('Se ha pulsado GRABAR')
  }
  onDemo(): void{
      alert('Demostracion');
  }

}
