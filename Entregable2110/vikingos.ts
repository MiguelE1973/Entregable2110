import { Personaje } from "./personajes";
export class Vikingo extends Personaje{
    
    hacha:number;

    constructor(nombre:string,edad: number,potencia:number,hacha:number) {
        super(nombre,edad,potencia);
        this.hacha=hacha;
    }
    atacar() :void {
        console.log(`${this.nombre} ataca con ${this.hacha} hachas`);
      }
    defender():void {
        console.log(`${this.nombre} se defiende con Escudo`);
      }   
    saltar(): void {
        console.log(`${this.nombre} salta `)
    }     
    habilidadEspecial():void{
        console.log(`${this.nombre} Lanza el Hacha`);
      }  
//metodo get atributo propio de la clase
getHacha():number{
    return this.hacha;
}   
//metodos set atributo propio de la clase
setHacha(hacha:number) {
    this.hacha=hacha;
}             
}    