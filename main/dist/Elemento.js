"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elemento = void 0;
class Elemento {
    valor;
    proximo;
    anterior;
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}
exports.Elemento = Elemento;
