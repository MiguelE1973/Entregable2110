import { Personaje } from "./personajes";
export class Gladiador extends Personaje{  
    espada:number;

    constructor(nombre:string,edad: number,potencia:number,espada:number) {
        super(nombre,edad,potencia);
        this.espada=espada;
    }
    atacar():void {
        console.log(`${this.nombre} ataca con ${this.espada} espadas`);
      }
    defender():void {
        console.log(`${this.nombre} se defiende con Escudo`);
      }  
    saltar(): void {
        console.log(`${this.nombre} salta `)
    }  
    habilidadEspecial():void {
        console.log(`${this.nombre} hace movimientos de espada`);
      }  
//metodo get atributo propio de la clase
    getEspada():number{
        return this.espada;
    }  
//metodos set atributo propio de la clase
    setEspada(espada:number) {
        this.espada=espada;
    }     
    
}  




 