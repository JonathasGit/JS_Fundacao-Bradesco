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




var horas_mes; // - Qunatidade de horas trabalhadas
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

// parado em 4:10