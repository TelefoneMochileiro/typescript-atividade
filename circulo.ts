class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularDiametro(): number {
        const resultado = this.raio * 2;
        return resultado;
    }

    calcularCircuferencia(): number {
        const resultado = 2 * 3.14159 * this.raio;
        return resultado;
    }

    calcularArea(): number {
        return this.raio * this.raio * 3.14159;
    }

}

const circulo1 = new Circulo(3);

console.log(circulo1);
console.log('Diametro do circulo: ' + circulo1.calcularDiametro());
console.log('Circunferencia do circulo: ' + circulo1.calcularCircuferencia());
console.log('Area do circulo: ' + circulo1.calcularArea());