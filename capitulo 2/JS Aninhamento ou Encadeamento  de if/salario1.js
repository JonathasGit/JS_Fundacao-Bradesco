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
    document.write(' Valor mínimo invalido');
}

//Validação das horas trabalhadas de 25 a 50
