class Receita {
    nome: string;
    ingredientes: string[]
    instrucoes: string[]

    constructor(nome: string, ingredientes: string[], instrucoes: string[]) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.instrucoes = instrucoes;
    }

    imprimirReceita() {
        console.log('Nome da receita: ' + this.nome);
        console.log('Ingredientes: ' + this.ingredientes);
        console.log('Modo de preparo: ' + this.instrucoes);
    }

}

const receita1 = new Receita('Bolo', ['Leite', 'Ovos', 'Farinha', 'fermento'], ['Misture tudo e coloque em uma forma e asse no forno']);
console.log(receita1.imprimirReceita())
