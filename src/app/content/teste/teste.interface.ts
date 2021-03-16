
// LIFO (last in - first out) stack (pilha)
export class Stack<T> {

  private count: number;
  private itemList; //TODO tipar esse cara como um objeto de valore infinitos

  constructor() {
    this.count = 0;
    this.itemList = {};
  }

  isEmpty(): boolean {
    // esse metodo retorna true ou false para se a pilha tiver vazia ou nao

    return this.count == 0;
  }

  size(): number {
    // retorna a quantidade de items na pilha

    return this.count;
  }

  push( element: T ) {
    // inserir novo elemento na pilha

    this.itemList[this.count] = element;
    this.count++;
  }

  pop(): T {
    // deleta o ultima item da pilha e o devolve como retorno da funcao;
    if (this.isEmpty()) return undefined; //tODO ver porque nao posso retornar o tipo de T

    this.count--;

    const result = this.itemList[this.count];

    delete this.itemList[this.count];

    return result;
  }

  peek() {
    // mostra qual o ultimo item da pilha
  }

  clear() {
    // limpa a pilha
  }

  /*
    var contador = 1

    var objetoDeExemplo = {
      0: 42,
    }

    this.objetoDeExemplo[0] = 43
  */
}

// FIFO (first in - first out) queue (fila)

// ---------------------------------------
