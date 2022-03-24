/* Objetivo: Utilizando o recurso de seleção multipla - switch case, 
  1 - Pesquisar o nome do mês de referência através do respctivo número do mês informado.

  - Objetivo= Métodos utilizados:
  Entrada: document.form (entrada de ddos via formulario)
  SAida: document.form (saída de dados via formulario)

  - importante: 
   os campos de form serão identificado com o prefixo f_= f_mes
   os campos de js serao identificados com o prefixo js_ = js_mes
*/

var js_mes;

//Inicio da função, para captura e pesquisa porseleção multipla
function verificames() {
    js_mes=parseInt(document.formcalend.f_mes.value);

    // Inicio da estrutura de seleção switch case
    switch (js_mes){
        case 1 : document.formcalend.f_nomemes.value = 'Janeiro'; break;
        case 2 : document.formcalend.f_nomemes.value = 'Favereiro'; break;
        case 3 : document.formcalend.f_nomemes.value = 'Março'; break;
        case 4 : document.formcalend.f_nomemes.value = 'Abril'; break;
        case 5 : document.formcalend.f_nomemes.value = 'Maio'; break;
        case 6 : document.formcalend.f_nomemes.value = 'Junho'; break;
        case 7 : document.formcalend.f_nomemes.value = 'Julho'; break;
        case 8 : document.formcalend.f_nomemes.value = 'Agosto'; break;
        case 9 : document.formcalend.f_nomemes.value = 'Setembro'; break;
        case 10 : document.formcalend.f_nomemes.value = 'Outubro'; break;
        case 11 : document.formcalend.f_nomemes.value = 'Novembro'; break;
        case 12 : document.formcalend.f_nomemes.value = 'Dezembro'; break;
        default : document.formcalend.f_nomemes.value = '** Mes invalido ** '; break;
    }  // final da estrutura switch
}


