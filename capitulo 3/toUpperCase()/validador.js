/* Obejtivo = capturar o nome do curso e apresentar o codigo correspondente 
 Verificar:
 se Js_cursodig for igual a SIST, apresentar o código SIST001/FB
 caso contrário, apresentar a mensagem "Curso inválido".
 Objetos e metodos

 Entrada: document.form
 Saida: document.form (para código válido no campo de saída do formulário)
 Saída: window.alert (para código inválido por janela de alerta)

 Formulário: fomrcurso
 Função: cadcurso
 Evento: Onclick*/


 var js_cursodig;


 function cadcurso(){
     js_cursodig=document.formcurso.f_cursodig.value;
     if (js_cursodig.toUppercase()=='SIST'){
         document.formcurso.f_codcurso.value='SIST001/FB';
     }else{
         document.write('Curso invalido');
     }

 }

 //Slide 14 capitulo 3 

 //FAltou slide17 
 