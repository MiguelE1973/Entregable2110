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
exports.Vikingo = void 0;
var personajes_1 = require("./personajes");
var Vikingo = /** @class */ (function (_super) {
    __extends(Vikingo, _super);
    function Vikingo(nombre, edad, potencia, hacha) {
        var _this = _super.call(this, nombre, edad, potencia) || this;
        _this.hacha = hacha;
        return _this;
    }
    Vikingo.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con ").concat(this.hacha, " hachas"));
    };
    Vikingo.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende con Escudo"));
    };
    Vikingo.prototype.saltar = function () {
        console.log("".concat(this.nombre, " salta "));
    };
    Vikingo.prototype.habilidadEspecial = function () {
        console.log("".concat(this.nombre, " Lanza el Hacha"));
    };
    //metodo get atributo propio de la clase
    Vikingo.prototype.getHacha = function () {
        return this.hacha;
    };
    //metodos set atributo propio de la clase
    Vikingo.prototype.setHacha = function (hacha) {
        this.hacha = hacha;
    };
    return Vikingo;
}(personajes_1.Personaje));
exports.Vikingo = Vikingo;
