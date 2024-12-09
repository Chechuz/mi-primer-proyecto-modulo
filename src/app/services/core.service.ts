import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

 testNumber:number=10;

  constructor() { }
testService1(){}

testService2(){}

testService3(){}

//Simula que comprueba usuario contra bbdd o API Rest
checkUsernnameExists(username: string): boolean{
  if(username =='ceci') return true;
  else return false;
}

isNullOrEmpty(str: string | null | undefined): boolean {
  return str === '' || str === null || str === undefined;
}

}
