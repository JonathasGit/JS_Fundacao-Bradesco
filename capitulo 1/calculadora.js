var inserir1Numero; 
var inserir2Numero;
var resultadoDaSoma;

function vamosSomar() {
    inserir1Numero = document.soma.primeiroNumero.value;
    inserir2Numero = document.soma.segundoNumero.value;

    resultadoDaSoma = parseInt(inserir1Numero) + parseInt(inserir2Numero);

   //document.write('O resultado é : ' + resultadoDaSoma);
   alert('O resultado da SOMA é : ' + resultadoDaSoma)
}

function vamosSubtrair() {
    inserir1Numero = document.subtrai.numeroSubtrai.value;
    inserir2Numero = document.subtrai.numeroSubtrai2.value;

    resultadoDaSoma = parseInt(inserir1Numero) - parseInt(inserir2Numero);

    alert('O resultado de SUBTRAÇÃO é : ' + resultadoDaSoma)
}

//document.write('O resultado é : ' + resultadoDaSoma);