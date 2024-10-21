export abstract class Personaje {
     nombre:string;
     edad: number;
     potencia:number;
    
    constructor(nombre:string,edad: number, potencia:number) {
        this.nombre=nombre;
        this.edad = edad;
        this.potencia=potencia;    
    }
    
    abstract atacar() :void;
    abstract defender(): void;
    abstract saltar(): void;
    
//metodos get     
    getNombre():string{
        return this.nombre;
    }
    getEdad(): number {
        return this.edad;
    }
    
    getPotencia(): number {
        return this.potencia;
    }
    
    
    //metodos set 
    setNombre(nombre:string) {
        this.nombre=nombre;
    }
    setEdad(edad:number) {
        this.edad=edad;
    }
    setPotencia(potencia:number) {
        this.potencia=potencia;
    }
    
}  
