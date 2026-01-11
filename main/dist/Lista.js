"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDuplamenteEncadeada = void 0;
const Elemento_1 = require("./Elemento");
class ListaDuplamenteEncadeada {
    inicio;
    fim;
    tamanho;
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }
    // Verifica se está vazia
    estaVazia() {
        return this.tamanho === 0;
    }
    // Retorna quantidade de elementos
    quantidade() {
        return this.tamanho;
    }
    // Adicionar no início
    adicionarNoInicio(valor) {
        const novo = new Elemento_1.Elemento(valor);
        if (this.estaVazia()) {
            this.inicio = novo;
            this.fim = novo;
        }
        else {
            novo.proximo = this.inicio;
            this.inicio.anterior = novo;
            this.inicio = novo;
        }
        this.tamanho++;
    }
    // Adicionar no fim
    adicionarNoFim(valor) {
        const novo = new Elemento_1.Elemento(valor);
        if (this.estaVazia()) {
            this.inicio = novo;
            this.fim = novo;
        }
        else {
            novo.anterior = this.fim;
            this.fim.proximo = novo;
            this.fim = novo;
        }
        this.tamanho++;
    }
    // Adicionar em posição específica
    adicionarNaPosicao(valor, posicao) {
        if (posicao < 0 || posicao > this.tamanho)
            return false;
        if (posicao === 0) {
            this.adicionarNoInicio(valor);
            return true;
        }
        if (posicao === this.tamanho) {
            this.adicionarNoFim(valor);
            return true;
        }
        let atual = this.inicio;
        let indice = 0;
        while (atual !== null && indice < posicao) {
            atual = atual.proximo;
            indice++;
        }
        if (atual) {
            const novo = new Elemento_1.Elemento(valor);
            novo.anterior = atual.anterior;
            novo.proximo = atual;
            atual.anterior.proximo = novo;
            atual.anterior = novo;
            this.tamanho++;
            return true;
        }
        return false;
    }
    // Remover do início
    removerNoInicio() {
        if (this.estaVazia())
            return null;
        const valor = this.inicio.valor;
        if (this.tamanho === 1) {
            this.inicio = null;
            this.fim = null;
        }
        else {
            this.inicio = this.inicio.proximo;
            this.inicio.anterior = null;
        }
        this.tamanho--;
        return valor;
    }
    // Remover do fim
    removerNoFim() {
        if (this.estaVazia())
            return null;
        const valor = this.fim.valor;
        if (this.tamanho === 1) {
            this.inicio = null;
            this.fim = null;
        }
        else {
            this.fim = this.fim.anterior;
            this.fim.proximo = null;
        }
        this.tamanho--;
        return valor;
    }
    // Remover em posição específica
    removerNaPosicao(posicao) {
        if (this.estaVazia() || posicao < 0 || posicao >= this.tamanho) {
            return null;
        }
        if (posicao === 0)
            return this.removerNoInicio();
        if (posicao === this.tamanho - 1)
            return this.removerNoFim();
        let atual = this.inicio;
        let indice = 0;
        while (atual !== null && indice < posicao) {
            atual = atual.proximo;
            indice++;
        }
        if (atual) {
            atual.anterior.proximo = atual.proximo;
            atual.proximo.anterior = atual.anterior;
            this.tamanho--;
            return atual.valor;
        }
        return null;
    }
    // Buscar valor
    buscar(valor) {
        let atual = this.inicio;
        while (atual !== null) {
            if (atual.valor === valor)
                return true;
            atual = atual.proximo;
        }
        return false;
    }
    // Exibir do início ao fim
    exibirInicioAoFim() {
        let atual = this.inicio;
        let resultado = "";
        while (atual !== null) {
            resultado += atual.valor + " ";
            atual = atual.proximo;
        }
        console.log(resultado.trim());
    }
    // Exibir do fim ao início
    exibirFimAoInicio() {
        let atual = this.fim;
        let resultado = "";
        while (atual !== null) {
            resultado += atual.valor + " ";
            atual = atual.anterior;
        }
        console.log(resultado.trim());
    }
}
exports.ListaDuplamenteEncadeada = ListaDuplamenteEncadeada;
