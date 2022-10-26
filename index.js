import input from 'readline-sync';


console.log("Aplicação de juros:");

let valor_devido = input.question('Informe o valor devido: R$ ');

if (valor_devido > 0) {
    let dias_atraso = input.question('Informe quantos dias se passaram desde o vencimento do boleto: ');


    if (dias_atraso > 0) {

        if (dias_atraso > 15) {
            var taxa = 10;
        }
        else {
            var taxa = 5;
        }

        var valor_juros = (valor_devido / 100) * taxa;
        var valor_total = Number(valor_devido) + valor_juros;

        console.log("Valor da dívida: R$ " + valor_devido);
        console.log("Dias atrasado: " + dias_atraso);
        console.log("Taxa de juros: " + taxa + "%");
        console.log("Valor total com juros: R$" + valor_total);
    }
    else {
            console.log('Valor inválido');
        }
    }
else {
            console.log('Valor inválido');
        }