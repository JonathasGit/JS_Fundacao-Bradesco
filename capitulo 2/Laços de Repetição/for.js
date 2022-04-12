var js_num;

document.write('<p> Apresentação dos valores acumulados para js_num=1 e menor ou igual  a 10 incrementando a variavel de +=2:');
document.write('<p> Note que o limite irá até 9, pois 9+2=11, portanto será maior do que 10');


//Aplicação do laõ incondicional - for

for (js_num=1; js_num<=10; js_num+=2){
    document.write('<p>' + js_num);
}

//Slide 53 do capitulo 2