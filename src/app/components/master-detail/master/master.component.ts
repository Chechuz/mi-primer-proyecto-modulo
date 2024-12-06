import { Component, OnInit, ViewChild  } from '@angular/core';
import { User } from '../../../data/user.model';
import data from '../../../data/data.json';
import { DetailComponent } from '../detail/detail.component';
import { Observable } from 'rxjs';
import { SionoPipe } from '../../../pipes/siono.pipe';
import { CoreService } from '../../../services/core.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit {
  usersList: Array<User> | undefined;
  userSelect: User;
  field: string;
  order: 'asc' | 'desc';

  demo: boolean;
  demoText: string;
  demoNumber:number;

  currentDate: Date;
  @ViewChild(DetailComponent) detalleA!: DetailComponent;
  @ViewChild('detail1') detalleB!: DetailComponent;

  time :any = new Observable((observer)=>{
    setInterval(()=>{
        let fecha= new Date();
        observer.next(fecha);
    }, 1000);
  })


  constructor(private demosiono: SionoPipe, private core: CoreService ){
    console.log("Ejecutando contructor...");
    this.usersList = data as Array<User>;
    this.userSelect = new User();
    this.currentDate= new Date();

    this.field = 'lastname';
    this.order = 'asc';
    
    this.demo=true;
    this.demoText=demosiono.transform(this.demo);

    this.core.testNumber=1000;
    this.demoNumber= this.core.testNumber;
  }

  ngOnInit(): void{
    console.log('Componente iniciado...');
  }

  ngAfterViewInit():void{
    console.log('Componente Maestro, Vista creada');
  }

  onClickFicha(item: User): void{
      this.userSelect = item;
      this.detalleA.onDemo();
      console.log('Seleccionado: '+ item.username);
  }

  onSaveUser(item:User){
    alert('Registrado correcto: '+ item.username);
  }

  onSort(column: string){
    if(this.field==column){
      if(this.order == 'asc') this.order='desc'
      else this.order= 'asc';
    } else{
      this.order = 'asc';
      this.field=column;
    }
   
  }
}
