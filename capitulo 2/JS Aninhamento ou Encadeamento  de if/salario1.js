var horas_mes;
var valor_hora;
var desconto_INSS;
var total_desconto;
var salario_bruto; // valor do salario Bruto
var salario_liquido;


//Entrada dos dados
horas_mes = parseFloat(window.prompt('Informe a quantidade de horas Trabalhadas: (135 a 180) '));
valor_hora = parseFloat(window.prompt('Informe o valor da hora trabalhada: (25 a 50)'));
desconto_INSS = parseFloat(window.prompt('Informe o percentual de desconto do INSS (5 a 15)'));

//Processando os dados
salario_bruto = valor_hora * horas_mes;
total_desconto = (desconto_INSS/100) * salario_bruto;
salario_liquido = salario_bruto - total_desconto;

// Saida dos dados
document.write('Demonstrativo para cálculo do salário Líquido<br>');

document.write('Quantidade de horas trabalhadas - (135 a 180) = ' + horas_mes + '<br>');

//Validando as horas do mês. (135 a 180)
if(horas_mes > 180){ // Se as horas do mês for maior que 180, então faça
    document.write('Valor máximo excedido');
}

if(horas_mes < 135){ //se as horas do mês for menor que 135, então
    document.write(' Valor mínimo invalido !!! ');
}

//Validação das horas trabalhadas de 25 a 50
document.write('Valor da hora trabalhada (25 a 50) = ' + valor_hora + '<br>');
if(valor_hora > 50){ // Se o valor da hora for maior que 50   
    document.write('Valor máximo excedido')
}
if(valor_hora < 25){ // Se valor for menor que 25
    document.write('Valor minino invalido' );    
}

document.write('Percentual de Desconto do INSS = ' + desconto_INSS);

if(desconto_INSS > 15){ // Se valor do inss foir maior que 15 
document.write('Valor máximo excedido');
}
if(desconto_INSS <5){
    document.write('Valor mínimo inválido');
}

document.write('================');
document.write('Salário Bruto' = salario_bruto);
document.write('Total de descontos' + total_desconto);
document.write('Salário Liquido' + salario_liquido);


// Saida de dados com aninhamneto de ifs

if(salario_liquido > 10500){ // se salario foi maior que 10.500
    document.write('Salário Elevado, maior que 10.500' );

} else
if(salario_liquido > 6000){
    document.write('Salário Satisfatorio!');
} else
if(salario_liquido > 3000){
    document.write('Salário Moderado');

} else {
    document.write('Salário insatisfatório');

}



