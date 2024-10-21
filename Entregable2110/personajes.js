"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad, potencia) {
        this.nombre = nombre;
        this.edad = edad;
        this.potencia = potencia;
    }
    //metodos get     
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getEdad = function () {
        return this.edad;
    };
    Personaje.prototype.getPotencia = function () {
        return this.potencia;
    };
    //metodos set 
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Personaje.prototype.setPotencia = function (potencia) {
        this.potencia = potencia;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
