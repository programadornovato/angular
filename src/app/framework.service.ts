import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  frameworks:Array<any>=[
    {nombre:'Angular',pop:'70%',edad:9},
    {nombre:'Reactjs',pop:'90%',edad:5},
    {nombre:'Vuejs',pop:'20%',edad:3}
  ];
  constructor() {
    console.log("aqui estoy");
  }
  regresaFramework(){
    return this.frameworks;
  }
  regresaUnFramework(i){
    return this.frameworks[i];
  }
}
