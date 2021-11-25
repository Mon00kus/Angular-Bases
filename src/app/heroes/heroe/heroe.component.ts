import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',  
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    title : string = 'Heroe Components Works!!!';
    nombre : string = 'IronMan';
    edad : number = 45;
    get nombreCapitalizado(){
      return this.nombre.toUpperCase();
    }
    obtenerNombreedad():string{
      return `${this.nombre}-${this.edad}`;
    }
    cambiarNombre():void{      
      if (this.nombre == 'SpiderMan') {
        this.nombre = 'IronMan';
      }else{
        this.nombre = 'SpiderMan'
      }
    }
    cambiarEdad():void{
      console.log('hey...');
      this.edad = 30;
    }
}