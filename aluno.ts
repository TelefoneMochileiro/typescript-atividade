class Aluno {

    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    calcularMedia(): number {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}

const aluno1 = new Aluno("Hendy", 27, [5, 6.5, 9]);
const aluno2 = new Aluno("Meel", 20, [7, 4.5, 9]);
console.log(aluno1.nome);
console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());