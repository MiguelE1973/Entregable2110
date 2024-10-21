"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gladiadores_1 = require("./gladiadores");
var vikingos_1 = require("./vikingos");
// Crear juagadores
var jugador1 = new gladiadores_1.Gladiador("Maximo", 35, 1000, 5);
var jugador2 = new vikingos_1.Vikingo("Ragnar", 30, 1000, 3);
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
console.log(jugador1.nombre, " ahora tiene una potencia de ", jugador1.getPotencia());
// -------------------------------------------------------------------- 
