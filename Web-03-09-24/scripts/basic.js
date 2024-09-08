// Utils
function sA(cl) {
    return document.querySelectorAll(cl);
}

function sO(aiD) {
    return document.querySelector(aiD);
}

// Specific Functions
function sum(cl) {
    console.log(sA(cl));
    return (Array.from(sA(cl)).map((e) => parseFloat(e.value)).reduce((pSum, e) => pSum + e, 0));
}

function converM_Cm() {
    let metro = sO('#Mt'),
        centi = sO('#Cm');
    if (metro.value) centi.value = parseFloat(metro.value) * 100;
    else metro.value = (parseFloat(centi.value) / 100).toFixed(2);
}

function calcAreaCirculo() {
    let raio = parseFloat(sO('#raio').value);
    if (!isNaN(raio)) alert('A área do círculo é ' + (Math.PI * Math.pow(raio, 2)).toFixed(2));
}

function calcDobroAreaQuadrado() {
    let lado = parseFloat(sO('#ladoQuadrado').value);
    if (!isNaN(lado)) alert('O dobro da área do quadrado é ' + (2 * Math.pow(lado, 2)).toFixed(2));
}

function calcSalario() {
    let ganhoHora = parseFloat(sO('#ganhoHora').value);
    let horasMes = parseFloat(sO('#horasMes').value);
    if (!isNaN(ganhoHora) && !isNaN(horasMes)) alert('Seu salário no mês é R$ ' + (ganhoHora * horasMes).toFixed(2));
}

function convFahrenheitCelsius() {
    let fahrenheit = parseFloat(sO('#fahrenheit').value);
    if (!isNaN(fahrenheit)) alert('A temperatura em Celsius é ' + (5 * ((fahrenheit - 32) / 9)).toFixed(2));
}

function convCelsiusFahrenheit() {
    let celsius = parseFloat(sO('#celsius').value);
    if (!isNaN(celsius)) alert('A temperatura em Fahrenheit é ' + ((celsius * 9 / 5) + 32).toFixed(2));
}

function calcOperacoes() {
    let int1 = parseInt(sO('#int1').value);
    let int2 = parseInt(sO('#int2').value);
    let real = parseFloat(sO('#real').value);

    if (!isNaN(int1) && !isNaN(int2) && !isNaN(real)) {
        let produto = (2 * int1) * (int2 / 2);
        let soma = (3 * int1) + real;
        let cubo = Math.pow(real, 3);

        alert('Produto do dobro do primeiro com metade do segundo: ' + produto +
              '\nSoma do triplo do primeiro com o terceiro: ' + soma +
              '\nTerceiro elevado ao cubo: ' + cubo.toFixed(2));
    }
}

function calcPesoIdeal() {
    let altura = parseFloat(sO('#altura').value);
    let genero = sO('#genero').value;

    if (!isNaN(altura)) {
        let pesoIdeal;
        if (genero === 'M') pesoIdeal = (72.7 * altura) - 58;
        else pesoIdeal = (62.1 * altura) - 44.7;

        alert('Seu peso ideal é ' + (pesoIdeal).toFixed(2));
    }
}

function calcSalarioComDescontos() {
    let ganhoHora = parseFloat(sO('#ganhoHoraDescontos').value);
    let horasMes = parseFloat(sO('#horasMesDescontos').value);

    if (!isNaN(ganhoHora) && !isNaN(horasMes)) {
        let salarioBruto = ganhoHora * horasMes;
        let ir = salarioBruto * 0.11;
        let inss = salarioBruto * 0.08;
        let sindicato = salarioBruto * 0.05;
        let salarioLiquido = salarioBruto - ir - inss - sindicato;

        alert(`+ Salário Bruto : R$ ${salarioBruto.toFixed(2)}
- IR (11%) : R$ ${ir.toFixed(2)}
- INSS (8%) : R$ ${inss.toFixed(2)}
- Sindicato (5%) : R$ ${sindicato.toFixed(2)}
= Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);
    }
}
