# 📚 Implementação de Lista Duplamente Encadeada em TypeScript

## 👥 Identificação dos membros
- Roger Pierre Reis Silva  
<!-- Se houver outro membro, adicione aqui -->

---

## 🧠 Descrição do Projeto

Este projeto consiste na implementação do **Tipo de Dado Abstrato (TDA) Lista Duplamente Encadeada**, utilizando a linguagem **TypeScript**.

Uma lista duplamente encadeada é uma estrutura de dados linear composta por nós, onde cada nó possui:
- Um valor armazenado
- Uma referência para o próximo nó
- Uma referência para o nó anterior

Essa estrutura permite percorrer a lista tanto do **início para o fim** quanto do **fim para o início**, garantindo maior flexibilidade em operações de inserção, remoção e navegação.

A implementação foi realizada **sem o uso de estruturas prontas**, como `Array` ou bibliotecas externas, conforme exigido na atividade.

---

## ⚙️ Estrutura do Projeto

📁 src
├── Elemento.ts
├── ListaDuplamenteEncadeada.ts
└── teste.ts

### 📌 `Elemento.ts`
Classe que representa cada nó da lista, contendo:
- Valor armazenado
- Ponteiro para o próximo elemento
- Ponteiro para o elemento anterior

### 📌 `ListaDuplamenteEncadeada.ts`
Classe principal que implementa o TDA, contendo:
- Referências para o início e fim da lista
- Controle do tamanho
- Todos os métodos exigidos pela atividade

### 📌 `teste.ts`
Arquivo responsável por demonstrar o funcionamento da lista por meio de exemplos práticos.

---

## 🛠️ Funcionalidades Implementadas

✔ Adicionar elemento no início da lista  
✔ Adicionar elemento no final da lista  
✔ Adicionar elemento em uma posição específica  
✔ Remover e retornar o primeiro elemento  
✔ Remover e retornar o último elemento  
✔ Remover e retornar um elemento em uma posição específica  
✔ Buscar se um valor existe na lista  
✔ Verificar se a lista está vazia  
✔ Retornar a quantidade de elementos armazenados  
✔ Exibir elementos do início para o fim  
✔ Exibir elementos do fim para o início  

Todos os métodos tratam corretamente casos extremos, como:
- Lista vazia
- Lista com apenas um elemento
- Posições inválidas

---

## ▶️ Como Executar o Código

### 1️⃣ Pré-requisitos
- Node.js instalado
- TypeScript instalado globalmente:
```bash
npm install typescript --save-dev
```
2️⃣ Compilar os arquivos TypeScript
```bash

Na raiz do projeto, execute:

npx tsc
```
3️⃣ Executar os testes

```bash
node ./dist/teste.js
```
