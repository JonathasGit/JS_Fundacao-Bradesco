 //Calcular o salario liquido de um funcinario que trabalha por hora (horista).
     /*- Para denvolver o cálculo vamos precisar das seguintes informações:
        -Quantidade de horas trabalhadas no mês (horas_mes) (js_qht)
        - Valor da hora de trabalho (valor_hora) (js_vht)
        - Percentual de descontos de INSS (desconto_INSS) (js_inss)

        - informar a classficação salarial
        - Objetivos/métodos utilizados: 
         entrada: window.prompt
         saida: document.write
     
     
     */




var horas_mes; // - Quantidade de horas trabalhadas
var valor_hora; // Valor da hora trabalhada
var desconto_INSS; // Desconto inss
var total_descontos;
var salario_bruto;
var salario_liquido;
var resposta=true;

/*Entrada de dados*/

horas_mes = parseFloat(window.prompt('Informe a quantidade de horas trabalhadas no mês: (135 a 180)', '00'));
valor_hora = parseFloat(window.prompt('Informe o valor da hora: (25 a 50)', '00'));
desconto_INSS = parseFloat(window.prompt('Informe o desconto: (5 a 10)'));


/*Processamento dos dados */
salario_bruto = horas_mes * horas_mes;
total_descontos = (desconto_INSS/100) * salario_bruto;
salario_liquido = salario_bruto - total_descontos;

//*Saida dos dados*/ */
document.write('<p> <b>Demonstrativo para cálculo do salário líquido</b> ');

document.write('<p>Quantidade de horas trabalhadas (135 a 180) = <b>' + horas_mes + '</b>' );
if (horas_mes > 180){
    document.write('... (<b>Valor máximo excedido</b> )');
}
if(horas_mes <135){
    document.write('... (<b>Valor minimo invalido</b>)');
}

//Cálcula o valor da hora trabalhada 
document.write('<p>Valor da  hora trabalhada (25 a 50) = <b>' + valor_hora + '</b>' );
if (valor_hora > 50){
    document.write('... (<b>Valor máximo excedido</b> )');
}
if(valor_hora < 25){
    document.write('... (<b>Valor minimo invalido</b>)');
}

//Calculo do desconto 
document.write('<p>Desconto INSS (5 a 10) = <b>' + desconto_INSS + '</b>' );
if (desconto_INSS > 10){
    document.write('... (<b>Valor máximo excedido</b> )');
}
if(desconto_INSS < 5){
    document.write('... (<b>Valor minimo invalido</b>)');
}


//Mostra resultado
document.write('<p> Salario Bruto = ' + salario_bruto);
document.write ('<p>Total de Desconto INSS = ' + desconto_INSS );
document.write('<p>Salario Liquido' + salario_liquido); 


//Saida de dados com Aninhamento de If

if(salario_liquido > 10500){
    document.write('...(<b>Salário Elevado!</b> Maior que R$10.500,00)');
} else {
    if(salario_liquido > 6000) {
        document.write('... (<b>Salário Bom</b> Maior que o R$6.000,00! )');
    } else{
        if(salario_liquido > 3000){
            document.write('...(<b>Saalrio até que bom!</b> Maior que R$3.000,00 )');
        } else {
            document.writeI('...(<b>Salário Não atende o que quer conquistar!!!</b> Menor que R$3.000,00)');
        }
    }
}

document.write('<p>==================================================');

resposta = window.confirm('Deseja continuar ?');

while (resposta == true);

// Slide 50 do capitulo 2 
