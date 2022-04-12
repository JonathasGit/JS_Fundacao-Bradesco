// desenvolver um programa que faça o teste de execução de duas opções
//

var js_resp;



//Decisão condicional composta is/else comparado ao valor lógico true
js_resp = window.confirm('Clique em um dos dois botões');

if(js_resp == true){
    document.write('Você acionou o botão: <b>OK</b>');

} else{
    document.write('Você acionou o botão: <b> Cancelar</b>');
}

//Slide 6 do capitulo 3