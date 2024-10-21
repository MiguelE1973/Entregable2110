import { Personaje } from "./personajes";
import { Gladiador } from "./gladiadores";
import { Vikingo } from "./vikingos";

// Crear juagadores
const jugador1 = new Gladiador("Maximo",35,1000,5);
const jugador2 = new Vikingo("Ragnar",30,1000,3);

// Utilizar métodos y habilidades
jugador1.atacar();
jugador1.habilidadEspecial();

jugador2.atacar();
jugador2.habilidadEspecial();

jugador1.defender();
jugador2.defender();

jugador1.saltar();
jugador2.saltar();

jugador1.setPotencia(2000); 
console.log(jugador1.nombre," ahora tiene una potencia de ", jugador1.getPotencia());
// -------------------------------------------------------------------- 





