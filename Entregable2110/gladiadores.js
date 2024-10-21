"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gladiador = void 0;
var personajes_1 = require("./personajes");
var Gladiador = /** @class */ (function (_super) {
    __extends(Gladiador, _super);
    function Gladiador(nombre, edad, potencia, espada) {
        var _this = _super.call(this, nombre, edad, potencia) || this;
        _this.espada = espada;
        return _this;
    }
    Gladiador.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con ").concat(this.espada, " espadas"));
    };
    Gladiador.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende con Escudo"));
    };
    Gladiador.prototype.saltar = function () {
        console.log("".concat(this.nombre, " salta "));
    };
    Gladiador.prototype.habilidadEspecial = function () {
        console.log("".concat(this.nombre, " hace movimientos de espada"));
    };
    //metodo get atributo propio de la clase
    Gladiador.prototype.getEspada = function () {
        return this.espada;
    };
    //metodos set atributo propio de la clase
    Gladiador.prototype.setEspada = function (espada) {
        this.espada = espada;
    };
    return Gladiador;
}(personajes_1.Personaje));
exports.Gladiador = Gladiador;
